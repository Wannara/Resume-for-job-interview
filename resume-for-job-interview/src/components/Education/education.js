import './styles.css';
function Education(){
    return(<>
    <div className="container-education">
        <h1 className="topic-education">Education</h1>
        <div className="content-education">
            <div className="year-education">
                <h3 className="text-year">
                    2017 - 2021 <br/>
                    Chiang Mai University<br/>
                    GPAX 3.21
                </h3>
                <h3 className="text-year">
                    2013 - 2015 <br/>
                    Fakkwan Wittayakom School<br/>
                    GPAX 3.86
                </h3>
            </div>

            <div className="line">
                <span className="circle"></span>
                <span className="vertical"></span>
                <span className="circle"></span>
                <span className="vertical"></span>
                
            </div>

            <div className="program-study">
                <h3 className="text-study">
                    Bachelor of Sciencec in Computer Science <br/>
                    Minor in Data Science
                </h3>
                <h3 className="text-study">
                    Science -  Mathematics Program
                </h3>
            </div>

            
        </div>
    </div>

    </>)
}

export default Education;