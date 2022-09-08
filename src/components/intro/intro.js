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
            <div className='fitcon'>Current webpage details with various characterization results of Beta Titanium alloy that are optimized by the author.
                                    These all put up to together informs us about the transition region and the morphology of the alloy.
                                    </div>
            {/* <div className='fitcon'>alsjnvksnvkjndv;kjasndv;kjanvkjnkvnadkjfvndjnvkdjfnvkjan</div>
            <div className='fitcon'>alsjnvksnvkjndv;kjasndv;kjanvkjnkvnadkjfvndjnvkdjfnvkjan</div>
            <div className='fitcon'>alsjnvksnvkjndv;kjasndv;kjanvkjnkvnadkjfvndjnvkdjfnvkjan</div> */}
        </div>
       </div>
    </div>

}
export default intro;