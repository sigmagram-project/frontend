// =========================================================================
// PLACEHOLDER: DESIGN TEAM
// =========================================================================
// Drop the product logo here. Suggested approach:
//   1. Add the logo file to frontend/src/assets/ (e.g. logo.svg or logo.png).
//   2. Import it above and render it below, e.g.:
//        import logo from '../assets/logo.svg';
//        export default function Logo() {
//          return <img src={logo} alt="Image Board logo" height={32} />;
//        }
//   3. Feel free to also adjust src/index.css (colors, fonts, spacing) --
//      it's intentionally left minimal/unbranded for now.
// =========================================================================
export default function Logo() {
  return (
    <div
      aria-label="logo placeholder"
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        background: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        color: '#888',
      }}
    >
      LOGO
    </div>
  );
}
