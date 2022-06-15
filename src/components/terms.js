import React from "react";
import { Box } from "@mui/material";
// import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cover from './images/cover.jpg';
// import { Button } from '@mui/material';
import Navbar from "./navbar";
import EmailIcon from '@mui/icons-material/Email';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Button from '@mui/material/Button';
import Footer from "./footer";
import LeftCard from "./leftcard";
import RightCard from "./rightcard";
import Background from "./Background";
import Album from "./imagecard";
import TextImage from "./textandimage";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import UpforA from "./upforadop";

function Terms() {
  return (
    <>
        <Box>
        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-between',boxShadow: 'none'}}>
      <Box sx={{ display: 'flex',height: 300, bgcolor:'#F7C85C',flex:1, justifyContent: 'center',alignItems: 'center',backgroundImage:{cover} }}>
          <Typography component="div" variant="h1">
                Terms and Conditions
          </Typography>
        </Box>
        </Card>
        
      </Box>
      <Card sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-evenly',boxShadow: 'none'}}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column',flex:1, alignItems: 'center' }}>
        <CardContent >
          <Typography component="div" variant="h6" sx={{px:4,color:'red'}}>
          Contact us
          </Typography>
          <Typography color="text.secondary" component="div" variant="h3" sx={{pl:4,py:2}} Wrap>
          Contact us for more information 
          </Typography>
        </CardContent>
      </Box> */}
      <CardContent sx={{ width: 1200,my:6 }}>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          The terms &quot;We&quot; / &quot;Us&quot; / &quot;Our&quot;/”Organization” individually and collectively refer to ‘The Stray Army
Charitable Trust’and the terms &quot;Visitor” ”User” refer to the users.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          This page states the Terms and Conditions under which you (Visitor) may visit this website
(“www.thestrayarmy.com ”). Please read this page carefully. If you do not accept the Terms and
Conditions stated here, we would request you to exit this site. The business, any of its business divisions
and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment
companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at
any time by updating this posting. You should visit this page periodically to re-appraise yourself of the
Terms and Conditions, because they are binding on all users of this Website.
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
          USE OF CONTENT
          </Typography>
           <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
           All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations
thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under
licence, by the business and / or its associate entities who feature on this Website. The use of these
properties or any other content on this site, except as provided in these terms and conditions or in the site
content, is strictly prohibited.
You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute,
or otherwise use the materials in any way for any public or commercial purpose without the respective
organisation’s or entity’s written permission.
          </Typography>
              <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
              ACCEPTABLE WEBSITE USE
          </Typography>
              <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
              (A) Security Rules
          </Typography>
            <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
            Visitors are prohibited from violating or attempting to violate the security of the Web site, including,
without limitation, (1) accessing data not intended for such user or logging into a server or account which
the user is not authorised to access, (2) attempting to probe, scan or test the vulnerability of a system or
network or to breach security or authentication measures without proper authorisation, (3) attempting to
interfere with service to any user, host or network, including, without limitation, via means of submitting a
virus or &quot;Trojan horse&quot; to the Website, overloading, &quot;flooding&quot;, &quot;mail bombing&quot; or &quot;crashing&quot;, or (4)
sending unsolicited electronic mail, including promotions and/or advertising of products or services.
Violations of system or network security may result in civil or criminal liability. The business and / or its
associate entities will have the right to investigate occurrences that they suspect as involving such
violations and will have the right to involve, and cooperate with, law enforcement authorities in
prosecuting users who are involved in such violations.
          </Typography>
              <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
              (B) General Rules
          </Typography>
            <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
            Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could
constitute or encourage conduct that would be considered a criminal offence or violate any applicable law
or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual
property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is
libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
          INDEMNITY
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          The User unilaterally agree to indemnify and hold harmless, without objection, the Organization, its
officers, directors, employees and agents from and against any claims, actions and/or demands and/or
liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of
www.thestrayarmy.com or their breach of the terms .
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
          LIABILITY
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          User agrees that neither Organization nor its group companies, directors, officers or employee shall be
liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary
damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of
substitute goods or/and services or resulting from any goods or/and data or/and information or/and
services purchased or/and obtained or/and messages received or/and transactions entered into through
or/and from the service or/and resulting from unauthorized access to or/and alteration of user&#39;s
transmissions or/and data or/and arising from any other matter relating to the service, including but not
limited to, damages for loss of profits or/and use or/and data or other intangible, even if Organization has
been advised of the possibility of such damages.
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          User further agrees that Organization shall not be liable for any damages arising from interruption,
suspension or termination of service, including but not limited to direct or/and indirect or/and incidental
or/and special consequential or/and exemplary damages, whether such interruption or/and suspension
or/and termination was justified or not, negligent or intentional, inadvertent or advertent.
User agrees that Organization shall not be responsible or liable to user, or anyone, for the statements or
conduct of any third party of the service. In sum, in no event shall Organization&#39;s total liability to the User
for all damages or/and losses or/and causes of action exceed the amount paid by the User
to Organization, if any, that is related to the cause of action.
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div" sx={{px:4,py:2}}>
          DISCLAIMER OF CONSEQUENTIAL DAMAGES
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{px:4,py:2}}>
          In no event shall Organization or any parties, organizations or entities associated with the corporate
brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including,
without limitations, incidental and consequential damages, lost profits, or damage to computer hardware
or loss of data information or business interruption) resulting from the use or inability to use the Website
and the Website material, whether based on warranty, contract, tort, or any other legal theory, and
whether or not, such organization or entities were advised of the possibility of such damages.
          </Typography>
      </CardContent>
      </Card>
      <Footer/>
    </>
  )
}

export default Terms