import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'


const Dashboard = ({themeRule}) => {
    console.log(themeRule)
    return (
        <div className={themeRule}>
            <Sidebar />
            <Main />
        </div>
    )
}

export default Dashboard
