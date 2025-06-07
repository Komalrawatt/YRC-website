import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import mainlogo from "../assets/mainlogo.jpg"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ListItem from './ListItem'

const activities = [
  {
    title: "Past Events",
    href: "/past-events",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Ongoing Events",
    href: "/#Ongoing",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Upcoming Events",
    href: "/upcoming-events",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

// const teams = [
//   {
//     title: "Coordinators",
//     href: "/coordinators",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Members",
//     href: "/members",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Volunteers",
//     href: "/volunteers",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Alumni",
//     href: "/alumni",
//     description: "Visually or semantically separates content.",
//   },
  // {
  //   title: "Advisors",
  //   href: "/advisors",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Mentors",
  //   href: "/mentors",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
// ]


const Navbar = () => {
  // drop-shadow-[0_10px_20px_rgba(255,0,0,0.2)]
  return (
    <div className="flex items-center justify-between bg-white p-5  sticky top-0 z-50 ">
      <div className='logo cursor-pointer text-3xl flex gap-2 hover:scale-110 transition duration-200 ml-3' >
        <div>
          <img className='h-9 w-9 ' src={mainlogo} alt="" />
        </div>
        <h2 className="font-bold text-[#41080e] "
          // style={{
            
          //   textShadow: "4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
          // }}
        >YRC</h2>
        <h2
          className="text-[#A7101F] hover:text-[#E4002A] text-3xl font-bold  "
          // style={{
          //   textShadow: "4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
          // }}
        >
          JCBUST
        </h2>

      </div>
      <div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/about">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]'  to="/#about" >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='hover:cursor-pointer hover:text-[#A7101F]'>Activities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {activities.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      to={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/gallery">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/gallery">
                  Gallery
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/contact">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/team">
                  Teams
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} as={Link} to="/contact">
                <Link className='hover:cursor-pointer hover:text-[#A7101F]' to="/contact">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* <ul className='flex justify-between gap-5 text-black text-lg font-semibold'>
          <li>Home</li>
          <li>About</li>
          <li>Activities</li>
          <li>Gallery</li>
          <li>Team</li>
          <li>Contact</li>
        </ul> */}
      </div>
      <div>
        <button>
          <Button className='bg-[#A7101F] text-1xl hover:bg-[#E4002A] cursor-pointer transition duration-100 ease-out hover:scale-90 mr-3'>
            Volunteer Now
          </Button>
        </button>
      </div>
    </div>
  )
}
// AF1740
// A31D1D
// F95454
// C7253E
// A02334
// D80032  *
// EB1D36
// DA0037

export default Navbar