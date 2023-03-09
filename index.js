import React, { useState } from 'react'
/// React router dom
import { Switch, Route } from 'react-router-dom'
/// Css
import './index.css'
import './chart.css'
import './step.css'

/// Layout
import Nav from './layouts/nav'

/// Main pages
import { Home } from "./components/Dashboard/Home";
import { Tests } from './components/doctor/Tests'
import { Users } from './components/Users/Users'
import { Doctor } from './components/doctor/Doctor'
import { VideoConsultation } from './components/Consultations/VC'
import { Shop } from './components/Shop/Shop'
import { KioskList } from './components/Kiosk/KiskList'


//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';
import Error404 from './pages/Error404'

const Markup = () => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "tests", component: Tests },
    { url: "users", component: Users },
    { url: "doctors", component: Doctor },
    { url: "kiosks", component: KioskList },
    { url: "consultations", component: VideoConsultation },
    { url: "shop", component: Shop },
    { url: "*", component: Error404 }

    // { url: "patient-list", component: PatientList },
    // { url: "patient-details", component: PatientDetails },
    // { url: "doctor-list", component: DoctorList },
    // { url: "doctor-details", component: Doctordetail },
    // { url: "reviews", component: PageReview },
    // { url: 'task', component: Task },

    // /// Apps
    // { url: 'app-profile', component: AppProfile },
    // { url: 'post-details', component: PostDetails },
    // { url: 'email-compose', component: Compose },
    // { url: 'email-inbox', component: Inbox },
    // { url: 'email-read', component: Read },
    // { url: 'app-calender', component: Calendar },


    // /// Chart
    // { url: 'chart-sparkline', component: SparklineChart },
    // { url: 'chart-chartjs', component: ChartJs },
    // { url: 'chart-chartist', component: Chartist },
    // { url: 'chart-apexchart', component: ApexChart },
    // { url: 'chart-rechart', component: RechartJs },

    // Bootstrap
    // { url: 'ui-alert', component: UiAlert },
    // { url: 'ui-badge', component: UiBadge },
    // { url: 'ui-button', component: UiButton },
    // { url: 'ui-modal', component: UiModal },
    // { url: 'ui-button-group', component: UiButtonGroup },
    // { url: 'ui-accordion', component: UiAccordion },
    // { url: 'ui-list-group', component: UiListGroup },
    // { url: 'ui-media-object', component: UiMediaObject },
    // { url: 'ui-card', component: UiCards },
    // { url: 'ui-carousel', component: UiCarousel },
    // { url: 'ui-dropdown', component: UiDropDown },
    // { url: 'ui-popover', component: UiPopOver },
    // { url: 'ui-progressbar', component: UiProgressBar },
    // { url: 'ui-tab', component: UiTab },
    // { url: 'ui-pagination', component: UiPagination },
    // { url: 'ui-typography', component: UiTypography },
    // { url: 'ui-grid', component: UiGrid },

    // Plugin
    // { url: 'uc-select2', component: Select2 },
    // { url: 'uc-nestable', component: Nestable },
    // { url: 'uc-noui-slider', component: MainNouiSlider },
    // { url: 'uc-sweetalert', component: MainSweetAlert },
    // { url: 'uc-toastr', component: Toastr },
    // { url: 'map-jqvmap', component: JqvMap },
    // { url: 'uc-lightgallery', component: Lightgallery },


    /// Widget
    // { url: 'widget-basic', component: Widget },

    /// Shop
    // { url: 'ecom-product-grid', component: ProductGrid },
    // { url: 'ecom-product-list', component: ProductList },
    // { url: 'ecom-product-detail', component: ProductDetail },
    // { url: 'ecom-product-order', component: ProductOrder },
    // { url: 'ecom-checkout', component: Checkout },
    // { url: 'ecom-invoice', component: Invoice },
    // { url: 'ecom-product-detail', component: ProductDetail },
    // { url: 'ecom-customers', component: EcomCustomers },

    /// Form

    // { url: 'form-redux', component: ReduxForm },
    // { url: 'form-redux-wizard', component: WizardForm },
    // { url: 'form-element', component: Element },
    // { url: 'form-wizard', component: Wizard },
    // { url: 'form-wizard', component: Wizard },
    // { url: 'form-editor-summernote', component: SummerNote },
    // { url: 'form-pickers', component: Pickers },
    // { url: 'form-validation-jquery', component: jQueryValidation },

    /// table
    // { url: 'table-datatable-basic', component: DataTable },
    // { url: 'table-bootstrap-basic', component: BootstrapTable },
    // { url: 'table-filtering', component: FilteringTable },
    // { url: 'table-sorting', component: SortingTable },

    /// pages
    // { url: 'page-register', component: Registration },
    // { url: 'page-lock-screen', component: LockScreen },
    // { url: 'page-login', component: Login },
    // { url: 'page-error-400', component: Error400 },
    // { url: 'page-error-403', component: Error403 },
    // { url: 'page-error-404', component: Error404 },
    // { url: 'page-error-500', component: Error500 },
    // { url: 'page-error-503', component: Error503 },
    // { url: 'todo', component: Todo },
  ]

  return (
    <>
      <div
        id={`${!pagePath ? 'main-wrapper' : ''}`}
        className={`${!pagePath ? 'show' : ''}`}
      >
        {!pagePath && (
          <Nav
            onClick={() => setActiveEvent(!activeEvent)}
            activeEvent={activeEvent}
            onClick2={() => setActiveEvent(false)}
            onClick3={() => setActiveEvent(true)}
          />
        )}
        <div
          className={` ${!path && activeEvent ? 'rightside-event' : ''} ${!pagePath ? 'content-body' : ''
            }`}
        >
          <div
            className={`${!pagePath ? 'container-fluid' : ''}`}
          >
            <Switch>
              {routes.map(({ component, url }, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${url}/`}
                  component={component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}

export default Markup
