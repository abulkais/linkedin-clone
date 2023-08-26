import React from 'react'
import './css/Widget.css';
import InfoIcon from '@material-ui/icons/Info';
const Widget = () => {
    
    return (

        <>
            <div className='widget'>
                <div className='widget__top'>
                    <div className='widget__header'>
                        <h4>LinkedIn News</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget__body'>
                        <ul className='widget__options'>
                            <li>
                                <h4>Fresher hiring intent on the rise</h4>
                                <p>6d ago * 3,55 readers</p>
                            </li>

                            <li>
                                <h4>Delving into Data Protection Act</h4>
                                <p>3d ago * 1,55 readers</p>
                            </li>

                            <li>
                                <h4>Demat account openings surge</h4>
                                <p>3d ago * 2,55 readers</p>
                            </li>

                            <li>
                                <h4>Decoding cyber skills demand</h4>
                                <p>3d ago * 3,235 readers</p>
                            </li>

                            <li>
                                <h4>More retail space for global brands</h4>
                                <p>3d ago * 3,235 readers</p>
                            </li>
                            <li>
                                <h4>India Inc's green hydrogen push</h4>
                                <p>1d ago • 106 readers</p>
                            </li>

                        
                            <li>
                                <h4>More US visas for Indian students</h4>
                                <p>1d ago • 1,563 readers</p>
                            </li>

                            <li>
                                <h4>Fewer women call showbiz shots</h4>
                                <p>22h ago • 146 readers</p>
                            </li>


                            
                        </ul>
                    </div>
                </div>

                <div className="widget__bottom">
                    <div className='widget__header'>
                        <h4>Today top Course</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget__body'>
                        <ul className='widget__options'>
                            <li>
                                <h4>java</h4>
                            </li>

                            <li>
                                <h4>Python</h4>
                            </li>

                            <li>
                                <h4>Node</h4>
                            </li>

                            <li>
                                <h4>React</h4>
                            </li>

                            <li>
                                <h4>Angular</h4>
                            </li>

                            <li>
                                <h4>Reactnative</h4>
                            </li>

                            <li>
                                <h4>Wordpress</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Widget