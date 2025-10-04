export default function Overlay({ color = 'black' }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        boxShadow: `inset 0 0 0 10px ${color}`,
        borderRadius: '0'
      }}
    >
      <div
        className="absolute inset-[10px] rounded-[30px]"
        style={{
          boxShadow: `0 0 0 100vmax ${color}`
        }}
      ></div>
    </div>
  );
}