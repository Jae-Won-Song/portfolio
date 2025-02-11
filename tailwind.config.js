// tailwind.config.js

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 3s steps(30) 1s forwards", // 타이핑 효과
        blink: "blink 0.75s step-end infinite", // 커서 깜박임 효과
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
    },
  },
  plugins: [],
};
