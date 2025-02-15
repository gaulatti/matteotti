import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MixIcon } from '@radix-ui/react-icons';
const Footer = () => {
  return (
    <footer className='footer footer-center p-10'>
      <aside>
        <MixIcon style={{ width: 50, height: 50 }} />
        <p>
          Copyright &copy; {new Date().getFullYear()}
          <br />
          <a href='//gaulatti.com' target='_blank' className='font-bold'>
            Javier Godoy N&uacute;&ntilde;ez
          </a>
        </p>
        All rights reserved
      </aside>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a href='//github.com/gaulatti' target='_blank'>
            <GitHubLogoIcon style={{ width: 24, height: 24 }} />
          </a>
          <a href='//instagram.com/gaulatti' target='_blank'>
            <InstagramLogoIcon style={{ width: 24, height: 24 }} />
          </a>
          <a href='//linkedin.com/in/gaulatti' target='_blank'>
            <LinkedInLogoIcon style={{ width: 24, height: 24 }} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export { Footer };
