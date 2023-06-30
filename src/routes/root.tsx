import { createBrowserRouter } from 'react-router-dom'

import routeDashboard from './dashboard'
import mainRoutes from './main'

const route = createBrowserRouter([...mainRoutes, ...routeDashboard])

export default route
