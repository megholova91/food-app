const Star = ({ height, width }) => {
  return (
    <svg width={height ?? "21.87"} height={width ?? "20.801"}>
      <path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" />
    </svg>
  );
};

export default Star;
