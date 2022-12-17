import React from 'react'
import SpecialCard from './cardSpecial';
import orangeJuiceImage from '../../assets/orange-juice.png';
import chefImage from '../../assets/chef.png';
import restaurantImage from '../../assets/resturant.png';
import './style.css';
import SectionTitle from '../../components/SectionTitle';
import Grid3Columns from '../../components/Grid3Columns';

const Special = () => {
    return (
        <div className='special'>
            <SectionTitle
                title="Special"
                subTitle="What makes us special"
                isCentered
            />

            <Grid3Columns>
                <SpecialCard
                    img={orangeJuiceImage}
                    title="Fresh food"
                    content="Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra.
                      Nunc pretium in amet at mattis cras."
                />
                <SpecialCard
                    img={chefImage}
                    title="skilled Chef"
                    content="Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. 
                     Nunc pretium in amet at mattis cras."
                />
                <SpecialCard
                    img={restaurantImage}
                    title="Exotic dishes"
                    content="Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra.
                      Nunc pretium in amet at mattis cras."
                />
            </Grid3Columns>
        </div>
    )
}

export default Special