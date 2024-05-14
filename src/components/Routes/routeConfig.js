// routeConfig.js
import Home from '../pages/Home';
import SupportPage from '../pages/Support/SupportPage.jsx';
import DocsSupportPage from '../Docs/Support/DocsSupportPage.jsx';
import DeploymentGuide from '../Docs/Deployment/DeploymentGuide.jsx';
import ConfigurationGuide from '../Docs/Configuration/ConfigurationGuide.jsx';
const routeConfig = [
  {
    path: '/',
    element: Home,
    protected: true,

  },
  {
    path: '/support',
    element: SupportPage,

  },
  {
    path: 'docs/support',
    element: DocsSupportPage,
  },
  {
    path : "/deployment",
    element : DeploymentGuide,
  },
  {
    path: "/configuration",
    element: ConfigurationGuide,
  }
];

export default routeConfig;
