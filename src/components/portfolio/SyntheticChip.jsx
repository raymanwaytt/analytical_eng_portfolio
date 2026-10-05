const SyntheticChip = ({ onMedia = false }) => (
  <span className={onMedia ? "synthetic-chip synthetic-chip--on-media" : "synthetic-chip"}>
    Synthetic data
  </span>
);

export default SyntheticChip;
