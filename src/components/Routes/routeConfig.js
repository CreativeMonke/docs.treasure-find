// routeConfig.js
import Faq from '../pages/Faq.jsx';
import SupportPage from '../pages/Support/SupportPage.jsx';
import DocsSupportPage from '../Docs/Support/DocsSupportPage.jsx';
import DeploymentGuide from '../Docs/Deployment/DeploymentGuide.jsx';
import ConfigurationGuide from '../Docs/Configuration/ConfigurationGuide.jsx';
import EndpointsReference, { AuthReference } from '../Docs/Api/ApiReference.jsx';
import DatabaseConfig from '../Docs/Database/DatabaseConfig.jsx';
const routeConfig = [
  {
    path: '/',
    element: Faq,
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
    path: "/deployment",
    element: DeploymentGuide,
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
  },
  {
    path: "/database",
    element : DatabaseConfig,
  }
];

export default routeConfig;
