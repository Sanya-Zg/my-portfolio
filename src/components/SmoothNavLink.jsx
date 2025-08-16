import { useNavigate, useLocation } from 'react-router-dom';

export default function SmoothNavLink({ toId, children, className, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (typeof onClick === 'function') {
      onClick();
    }

    if (location.pathname === '/') {
      const el = document.getElementById(toId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: toId } });
    }
  };

  return (
    <a href={`#${toId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
