import React from 'react'
import stl from "./contactsPage.module.scss"
import { InstagramFilled, MailFilled, PhoneFilled } from '@ant-design/icons'

function ContactsPage() {
  return (
    <div className={stl.contactsPage}>
        <div className={stl.main}>
            <div className={stl.container}>
                <h2>Contact Us!</h2>
                <div className={stl.contacts} >
                    <ul >
                        <li style={{ listStyle:'none', display: 'flex', gap: 20 }}><InstagramFilled style={{ color: '#8b58fa'}} />  Instagram: bugu_ene_samyn</li>
                        <li style={{listStyle: 'none', display: 'flex', gap: 20 }}><MailFilled style={{ color: '#8b58fa'}} />  Email: enactus.manas@gmail.com</li>
                        <li style={{ listStyle: 'none', display: 'flex', gap: 20 }}><PhoneFilled style={{ color: '#8b58fa'}}/>  Telephone: +996 (500) 00-11-11</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactsPage