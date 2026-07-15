import logo from '../assets/logo.png';

export default function Logo() {
    return (
        <div className="logo-wrap">
            <img
                src={logo}
                alt="PixelBoard logo"
                width={260}
                height={140}
            />
        </div>
    );
}
