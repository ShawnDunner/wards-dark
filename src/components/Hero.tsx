import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import wardsLogo from "@/assets/Wards Service Centre logo design.png";
import spaceBackground from "@/assets/Space.png";
import part01HeadGasket from "@/assets/01_head_gasket.png";
import part01PistonRod from "@/assets/01_piston_connecting_rod.png";
import part02Crankshaft from "@/assets/02_crankshaft.png";
import part02Radiator from "@/assets/02_radiator.png";
import part03Carburetor from "@/assets/03_carburetor.png";
import part03EngineBlock from "@/assets/03_engine_block.png";
import part04TimingChain from "@/assets/04_timing_chain.png";
import part04Tire from "@/assets/04_tire.png";
import part05StarterMotor from "@/assets/05_starter_motor.png";
import part05SteeringWheel from "@/assets/05_steering_wheel.png";
import part06OilFilter from "@/assets/06_oil_filter.png";
import part06WaterPump from "@/assets/06_water_pump.png";
import part07ClutchPlate from "@/assets/07_clutch_plate.png";
import part07Distributor from "@/assets/07_distributor.png";
import part08BrakeRotor from "@/assets/08_brake_rotor.png";
import part08SparkPlug from "@/assets/08_spark_plug.png";
import part09Alternator from "@/assets/09_alternator.png";
import part09Gearbox from "@/assets/09_gearbox.png";

type FloatingPart = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  spin: number;
};

const partImages = [
  part01HeadGasket,
  part01PistonRod,
  part02Crankshaft,
  part02Radiator,
  part03Carburetor,
  part03EngineBlock,
  part04TimingChain,
  part04Tire,
  part05StarterMotor,
  part05SteeringWheel,
  part06OilFilter,
  part06WaterPump,
  part07ClutchPlate,
  part07Distributor,
  part08BrakeRotor,
  part08SparkPlug,
  part09Alternator,
  part09Gearbox,
];

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const partRefs = useRef<(HTMLImageElement | null)[]>([]);
  const particlesRef = useRef<FloatingPart[]>([]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const getRestrictedRect = () => {
      const content = contentRef.current;
      if (!content) return null;

      const heroBox = hero.getBoundingClientRect();
      const contentBox = content.getBoundingClientRect();

      return {
        left: contentBox.left - heroBox.left - 36,
        top: contentBox.top - heroBox.top - 30,
        right: contentBox.right - heroBox.left + 36,
        bottom: contentBox.bottom - heroBox.top + 30,
      };
    };

    const intersectsRestrictedArea = (particle: FloatingPart, restricted: ReturnType<typeof getRestrictedRect>) => {
      if (!restricted) return false;

      const radius = particle.size / 2;
      const centerX = particle.x + radius;
      const centerY = particle.y + radius;

      return (
        centerX > restricted.left - radius &&
        centerX < restricted.right + radius &&
        centerY > restricted.top - radius &&
        centerY < restricted.bottom + radius
      );
    };

    const placeParticles = () => {
      const width = hero.clientWidth;
      const height = hero.clientHeight;
      const restricted = getRestrictedRect();
      const placed: FloatingPart[] = [];

      for (let i = 0; i < partImages.length; i += 1) {
        const size = 48 + Math.random() * 30;
        let candidate: FloatingPart | null = null;

        for (let attempt = 0; attempt < 300; attempt += 1) {
          const next: FloatingPart = {
            x: Math.random() * Math.max(1, width - size),
            y: Math.random() * Math.max(1, height - size),
            vx: (Math.random() * 2 - 1) * 0.75,
            vy: (Math.random() * 2 - 1) * 0.75,
            size,
            angle: Math.random() * 360,
            spin: (Math.random() * 2 - 1) * 0.18,
          };

          if (intersectsRestrictedArea(next, restricted)) continue;

          const overlapsExisting = placed.some((existing) => {
            const dx = next.x + next.size / 2 - (existing.x + existing.size / 2);
            const dy = next.y + next.size / 2 - (existing.y + existing.size / 2);
            const minDistance = next.size / 2 + existing.size / 2 + 8;
            return dx * dx + dy * dy < minDistance * minDistance;
          });

          if (!overlapsExisting) {
            candidate = next;
            break;
          }
        }

        placed.push(
          candidate ?? {
            x: Math.random() * Math.max(1, width - size),
            y: Math.random() * Math.max(1, height - size),
            vx: (Math.random() * 2 - 1) * 0.75,
            vy: (Math.random() * 2 - 1) * 0.75,
            size,
            angle: Math.random() * 360,
            spin: (Math.random() * 2 - 1) * 0.18,
          },
        );
      }

      particlesRef.current = placed;
      particlesRef.current.forEach((particle, index) => {
        const element = partRefs.current[index];
        if (!element) return;
        element.style.width = `${particle.size}px`;
        element.style.transform = `translate(${particle.x}px, ${particle.y}px) rotate(${particle.angle}deg)`;
      });
    };

    const animate = () => {
      const width = hero.clientWidth;
      const height = hero.clientHeight;
      const restricted = getRestrictedRect();
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        const radius = particle.size / 2;

        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.angle += particle.spin;
        }

        if (particle.x <= 0 || particle.x + particle.size >= width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(particle.x, width - particle.size));
        }
        if (particle.y <= 0 || particle.y + particle.size >= height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(particle.y, height - particle.size));
        }

        if (restricted && intersectsRestrictedArea(particle, restricted)) {
          const centerX = particle.x + radius;
          const centerY = particle.y + radius;
          const toLeft = Math.abs(centerX - (restricted.left - radius));
          const toRight = Math.abs(centerX - (restricted.right + radius));
          const toTop = Math.abs(centerY - (restricted.top - radius));
          const toBottom = Math.abs(centerY - (restricted.bottom + radius));
          const minPush = Math.min(toLeft, toRight, toTop, toBottom);

          if (minPush === toLeft) {
            particle.x = restricted.left - particle.size;
            particle.vx = -Math.abs(particle.vx);
          } else if (minPush === toRight) {
            particle.x = restricted.right;
            particle.vx = Math.abs(particle.vx);
          } else if (minPush === toTop) {
            particle.y = restricted.top - particle.size;
            particle.vy = -Math.abs(particle.vy);
          } else {
            particle.y = restricted.bottom;
            particle.vy = Math.abs(particle.vy);
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const ax = a.x + a.size / 2;
          const ay = a.y + a.size / 2;
          const bx = b.x + b.size / 2;
          const by = b.y + b.size / 2;
          const dx = bx - ax;
          const dy = by - ay;
          const distance = Math.hypot(dx, dy);
          const minDistance = a.size / 2 + b.size / 2;

          if (distance > 0 && distance < minDistance) {
            const nx = dx / distance;
            const ny = dy / distance;
            const overlap = (minDistance - distance) / 2;

            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;

            const av = a.vx * nx + a.vy * ny;
            const bv = b.vx * nx + b.vy * ny;
            const impulse = bv - av;
            a.vx += impulse * nx;
            a.vy += impulse * ny;
            b.vx -= impulse * nx;
            b.vy -= impulse * ny;
          }
        }
      }

      particles.forEach((particle, index) => {
        const element = partRefs.current[index];
        if (!element) return;
        element.style.transform = `translate(${particle.x}px, ${particle.y}px) rotate(${particle.angle}deg)`;
      });

      raf = window.requestAnimationFrame(animate);
    };

    placeParticles();
    raf = window.requestAnimationFrame(animate);
    window.addEventListener("resize", placeParticles);

    return () => {
      window.removeEventListener("resize", placeParticles);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={spaceBackground} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/45" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        {partImages.map((part, index) => (
          <img
            key={part}
            ref={(element) => {
              partRefs.current[index] = element;
            }}
            src={part}
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-0 select-none opacity-90 drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]"
          />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div ref={contentRef} className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img src={wardsLogo} alt="Wards Service Centre Logo" className="mx-auto mb-8 w-80 drop-shadow-2xl md:w-96 lg:w-[28rem]" />
          <h1 className="mb-6 bg-gradient-primary bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Wards Service Centre
          </h1>
          <p className="mb-2 text-lg text-foreground md:text-xl">Mechanics in Bracken Ridge</p>
          <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
            Premium Auto Care &amp; Maintenance that's out of this world
          </p>
          <div className="mb-8 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <p className="text-lg text-foreground">Booking system available 24/7 for your convenience</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/book">
              <Button
                size="lg"
                className="!border !border-[#271F37] bg-gradient-primary px-8 text-lg text-primary-foreground shadow-orange transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book In Your Vehicle With Us Now
              </Button>
            </Link>
            <Link to="/faqs">
              <Button
                size="lg"
                className="border border-[#ce7929] bg-gradient-secondary px-8 text-lg text-secondary-foreground shadow-purple transition-all duration-300 hover:scale-105 hover:shadow-purple"
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                Frequently Asked Questions - FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
