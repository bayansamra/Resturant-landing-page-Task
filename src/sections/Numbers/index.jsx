import React from 'react'
import Grid3Columns from '../../components/Grid3Columns'
import Number from './Number'
import dish from '../../assets/dish.png'
import chef2 from '../../assets/chef 2.png'
import team from '../../assets/team.png'
import Container from '../../components/Container'

import './style.css'

const Numbers = () => {
    return (
        <div className="numbers">
            <Container>
                <Grid3Columns>
                    <Number
                        img={dish}
                        number={"250+"}
                        title="Delicacy"
                    />
                    <Number
                        img={chef2}
                        number={"10+"}
                        title="renowed chefs"
                    />
                    <Number
                        img={team}
                        number={"30+"}
                        title="Members"
                    />
                </Grid3Columns>
            </Container>
        </div>
    )
}

export default Numbers