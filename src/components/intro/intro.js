import React from 'react';
import './intro.css';

function intro(){
   
    return <div>
       <div className='introcss'>
        {/* Image intorduction */}
        <div className='introImg'>
            {/* https://drive.google.com/file/d/1YJB34vn70C0UF37OI1-2dMbEpTaJhK-B/view?usp=sharing */}
            <img className='roundImg' 
            src="http://drive.google.com/uc?export=view&id=1YJB34vn70C0UF37OI1-2dMbEpTaJhK-B"
            />
        </div>
        {/* About you */}
        <div className='introDesc'>
            <h3>Hemant Gullu</h3>
            <div className='fitcon'>Welcome to my characterization page</div>
            <div className='fitcon'>Currently working as an Associate Researcher in the Department of Materials Engineering at the Indian Institute of Science, Bangalore on Graphene-based Nanocomposites, As Man of Curiosity I am fascinated with research and development taking place in the field of Material Science and Engineering.
                                    </div>
            {/* <div className='fitcon'>alsjnvksnvkjndv;kjasndv;kjanvkjnkvnadkjfvndjnvkdjfnvkjan</div>
            <div className='fitcon'>alsjnvksnvkjndv;kjasndv;kjanvkjnkvnadkjfvndjnvkdjfnvkjan</div>
            <div className='fitcon'>alsjnvksnvkjndv;kjasndv;kjanvkjnkvnadkjfvndjnvkdjfnvkjan</div> */}
        </div>
       </div>
    </div>

}
export default intro;
