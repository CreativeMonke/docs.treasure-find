// routeConfig.js
import Home from '../pages/Home';
import SupportPage from '../pages/Support/SupportPage.jsx';
import DocsSupportPage from '../Docs/Support/DocsSupportPage.jsx';
import DeploymentGuide from '../Docs/Deployment/DeploymentGuide.jsx';
import ConfigurationGuide from '../Docs/Configuration/ConfigurationGuide.jsx';
import EndpointsReference, { AuthReference } from '../Docs/Api/ApiReference.jsx';
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
    path: '/docs/support',
    element: DocsSupportPage,
  },
  {
    path : "/deployment",
    element : DeploymentGuide,
  },
  {
    path: "/configuration",
    element: ConfigurationGuide,
  },
  {
    path: '/api/endpoints',
    element: EndpointsReference,
  },
  {
    path: '/api/authentication',
    element: AuthReference,
  }
];

export default routeConfig;
