import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'wave': 'wave 1s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'flip': 'flip 1s ease-in-out',
        'wobble': 'wobble 1s ease-in-out infinite',
        'jello': 'jello 1s ease-in-out',
        'spiral': 'spiral 2s ease-in-out infinite',
        'firework': 'firework 1.5s ease-out forwards',
        'rubber-bounce': 'rubberBounce 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite var(--delay)',
        'tornado-spin': 'tornadoSpin 2s linear infinite',
        'tornado-spin-fast': 'tornadoSpin 1.5s linear infinite',
        'tornado-spin-faster': 'tornadoSpin 1s linear infinite',
        'debris-fly': 'debrisFly 2s ease-out infinite var(--delay)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '100%': { transform: 'perspective(400px) rotateY(360deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-10px) rotate(-5deg)' },
          '30%': { transform: 'translateX(5px) rotate(3deg)' },
          '45%': { transform: 'translateX(-5px) rotate(-3deg)' },
          '60%': { transform: 'translateX(3px) rotate(2deg)' },
          '75%': { transform: 'translateX(-1px) rotate(-1deg)' },
        },
        jello: {
          '0%, 100%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
        },
        spiral: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1.2)' },
        },
        firework: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        rubberBounce: {
          '0%': { transform: 'translate(0, 0) scale(0)', opacity: '0' },
          '5%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '10%': { transform: 'translate(calc(var(--horizontal) * 0.3), calc(var(--vertical) * -0.5))', opacity: '1' },
          '20%': { transform: 'translate(calc(var(--horizontal) * 0.6), var(--vertical))', opacity: '1' },
          '30%': { transform: 'translate(calc(var(--horizontal) * 0.9), calc(var(--vertical) * -0.3))', opacity: '1' },
          '40%': { transform: 'translate(calc(var(--horizontal) * 1.2), var(--vertical))', opacity: '1' },
          '50%': { transform: 'translate(calc(var(--horizontal) * 0.9), calc(var(--vertical) * -0.1))', opacity: '1' },
          '60%': { transform: 'translate(calc(var(--horizontal) * 0.6), var(--vertical))', opacity: '1' },
          '70%': { transform: 'translate(calc(var(--horizontal) * 0.3), calc(var(--vertical) * -0.05))', opacity: '1' },
          '80%': { transform: 'translate(0, var(--vertical))', opacity: '1' },
          '90%': { transform: 'translate(calc(var(--horizontal) * -0.3), calc(var(--vertical) * -0.02))', opacity: '1' },
          '100%': { transform: 'translate(calc(var(--horizontal) * -0.5), var(--vertical))', opacity: '1' },
        },
        tornadoSpin: {
          '0%': { transform: 'rotate(0deg) scale(1, 1)' },
          '100%': { transform: 'rotate(360deg) scale(1, 1)' },
        },
        debrisFly: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { transform: 'translate(0, -5px) rotate(30deg)', opacity: '1' },
          '50%': { transform: 'translate(var(--tx), var(--ty)) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'translate(calc(var(--tx) * 2), calc(var(--ty) * 1.5)) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};