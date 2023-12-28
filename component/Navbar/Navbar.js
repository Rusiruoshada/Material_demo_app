"use client"

import React from 'react'
import UpperNavbar from './UpperNavbar'
import BottomNavbar from './BottomNavbar'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <>
        <UpperNavbar />
        <BottomNavbar />
        <SearchBar />
    </>
  )
}
