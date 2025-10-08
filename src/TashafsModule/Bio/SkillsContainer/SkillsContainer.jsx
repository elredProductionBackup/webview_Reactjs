import React from 'react'
import SkillsScroll from '../components/SkillsScroll/SkillsScroll'

const SkillsContainer = ({skills, skillsLoader}) => {
    return (
        <>
            <SkillsScroll
                data={skills?.skills}
                heading={"I am incredible at these skills / professionally great at"}
                loader={skillsLoader}
                noDataMsg={"No skills added yet"}
                shimmerWidth={303}
                key='profession'
                id="profession"
            />
            <hr />
            <SkillsScroll
                data={skills?.hobbies}
                heading={"Hobbies I am passionate about"}
                loader={skillsLoader}
                noDataMsg={"No hobbies added yet"}
                shimmerWidth={227}
                key='hobbies'
                id="hobbies"
            />
            <hr />
            <SkillsScroll
                data={skills?.subjects}
                heading={"My favourite subjects are"}
                loader={skillsLoader}
                noDataMsg={"No subjects added yet"}
                shimmerWidth={166}
                key='subject'
                id='subject'
                
            />
        </>
    )
}

export default SkillsContainer
