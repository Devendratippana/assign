import React from 'react'
import './index.css'
import Navbar from '../navbar/Navbar'

const Footer = () => {
  return (
    <div className='footer-card'>
        <div className='title'>
             <div>
        <h1>AI Wealth Profit</h1>
        <p>Automated Income Generation</p>
      </div>
        </div>
        <p >Empowering individuals with Ai-driven Solutions for finicaial growth and success.</p>
        <div>
            <h1>Legal</h1>
            <p className='hover'>Terms & Conditions</p>
            <p className='hover'>Privacy Policy</p>
            <p className='hover'>Earnings Disclaimer</p>
            <p className='hover'>Refund Policy</p>
        </div>
        <div>
            <h1>Support
            </h1>
            <p className='hover'>Contact Us</p>
            <p className='hover'>FAQ</p>
            <p className='hover'>Help  Center</p>
        </div>
        <div>
            <h1>Important Notice</h1>
            <p>Results may vary.Past Performance does not gurantee future results.see our earnings disclaimer for full details.</p>
            <p>Secure Payment Processing</p>
        </div>
        <hr/>
        <div className='footer-mid'>
             <p>2025 Ai Wealth Profit.all rights reserved.</p>
            <div className='ele'>
                <p className='hover'>Terms</p>
                <p className='hover'>Privacy</p>
                <p className='hover'>Cookies</p>
            </div>
        </div>
       <p className='disclaimer'>EARNINGS DISCLAIMER: Any earnings or income statements, or earnings or income examples, are only estimates what we think you could earn. There is no assurance you'll do as well. Your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic.

This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Faceboo in any way. FACEBOOK is a trademark of FACEBOOK,Inc.</p>
    </div>
  )
}

export default Footer
