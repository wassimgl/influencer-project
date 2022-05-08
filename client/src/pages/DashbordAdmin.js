import React from 'react'
import { Link } from 'react-router-dom'

const DashbordAdmin = () => {
  return (
    <div>
    <div>
<Link to='/dashbord/listinfluncer' ><button>influencer table</button> </Link>
<Link to='/dashbord/listcustomer'><button>customer table</button> </Link>
<Link to='/dashbord/listadmin'><button> Admin table </button> </Link>
</div>

    </div>
  )
}

export default DashbordAdmin