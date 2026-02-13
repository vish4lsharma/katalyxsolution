import { useEffect, useRef } from 'react';
import './CinematicBackground.css';

const CinematicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Particle system
        const particles = [];
        const particleCount = 80;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.hue = Math.random() * 60 + 200; // Blue to purple range
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Energy rings
        const rings = [];
        class EnergyRing {
            constructor() {
                this.x = canvas.width / 2;
                this.y = canvas.height / 2;
                this.radius = 0;
                this.maxRadius = Math.max(canvas.width, canvas.height) * 0.6;
                this.opacity = 0.8;
                this.speed = 0.5;
            }

            update() {
                this.radius += this.speed;
                this.opacity -= 0.003;

                if (this.opacity <= 0 || this.radius > this.maxRadius) {
                    this.radius = 0;
                    this.opacity = 0.8;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(59, 130, 246, ${this.opacity * 0.3})`;
                ctx.lineWidth = 2;
                ctx.stroke();

                // Inner glow
                ctx.strokeStyle = `rgba(168, 85, 247, ${this.opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        // Create 3 rings with staggered timing
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                rings.push(new EnergyRing());
            }, i * 2000);
        }

        // Animation loop
        let animationId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            rings.forEach(ring => {
                ring.update();
                ring.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} className="cinematic-canvas" />
            <div className="gradient-orb gradient-orb-1"></div>
            <div className="gradient-orb gradient-orb-2"></div>
            <div className="gradient-mesh"></div>
        </>
    );
};

export default CinematicBackground;
