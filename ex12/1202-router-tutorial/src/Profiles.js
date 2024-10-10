import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Profile from './Profile'

const profileData = {
    o1: {
        name: "철수",
        description: "안녕!"
    },
    o2: {
        name: "영희",
        description: "안녕~"
    },
    o3: {
        name: "민수",
        description: "안녕"
    }
}

function Profiles() {
  return (
    <>
        <h3>유저 목록:</h3>
        <ul>
            {Object.keys(profileData).map((key, i) => {
                return (
                    <li key={i}>
                        <Link to={`/profiles/${key}`}>{profileData[key].name}</Link>
                    </li>
                );
            })
            }
            <li>
                <NavLink to={`/profiles/o1`} style={({isActive}) => ({
                    background: isActive ? "yellowgreen" : "transparent"
                })}>철수(NavLink)</NavLink>
                {/* IsActive 값 반환 */}
            </li>
        </ul>

        <Routes>
            <Route path="/" element={<div>유저를 선택해주세요.</div>} />
            <Route path=":username" element={<Profile profileData={profileData}/>} />
        </Routes>
    </>
  )
}

export default Profiles