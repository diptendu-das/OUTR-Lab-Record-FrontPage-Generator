import OUTR_LOGO from "../assets/imgFile/OUTR_LOGO.png";

export const Preview = ({ formData, isSubmitTo, boxThemeToggle }) => {

    const boxStyle = boxThemeToggle ? {
        backgroundColor: formData.boxThemeColor,
        padding: '6px 6px',
        borderRadius: '8px',
        border: `1px solid ${formData.headingColor}`,
    } : {};

    return (
        <div className="w-full lg:w-1/2 bg-slate-100 p-2 lg:p-10 flex justify-center items-start overflow-y-auto hide-scrollbar" style={{ maxHeight: '100vh' }}>
            <div className="shadow-2xl bg-white mt-4 cursor-default m-2" style={{ width: 'fit-content', height: 'fit-content' }}>
                <div className="h-[534.6px] w-[378px] border-2 p-4"
                    id="lab-record-preview"
                >
                    <div className="border border-red-800 border-4 border-double  h-full flex flex-col items-center">

                        <p className="text-center py-4 px-2 pb-1.5 font-bold text-[18px]"
                            style={{ color: `${formData.collegeColor}` }}
                        >ODISHA UNIVERSITY OF TECHNOLOGY AND RESEARCH, BHUBANESWAR</p>
                        <img src={OUTR_LOGO} alt="OUTR, Bhubaneswar" className="w-30" />

                        <div id="labName" className="pt-3  flex flex-col justify-center items-center">
                            <span id="prevDept" className="font-bold text-center text-[17px]" style={{ color: `${formData.deptColor}` }}>{formData.deptName || 'Dept/School:__________'}</span>
                            <span id="prevSubject" className="font-bold text-center text-[15px]" style={{ color: `${formData.labSubjectColor}` }}>{formData.labSubject || 'Lab Name:__________'}</span>
                            <p className="labName" >
                                <b className="text-violet-900 text-[13px] font-bold text-center">Subject Code: </b>
                                <span className="text-violet-900 text-[13px] font-bold" id="prevSubCode">{formData.subjectCode || '___________'}</span>
                            </p>
                        </div>

                        <div id="DataBox" className="flex gap-8 m-5 text-[11px] font-bold">


                            {isSubmitTo && (<div id="SubmittedTo" className="flex flex-col text-[11px]" style={boxStyle}>
                                <h2 className=" text-[14px] font-bold" id="STH" style={{ color: `${formData.headingColor}` }}>Submitted To:</h2>
                                <p className=""><span id="prevTeacher1">{formData.teacher1 || 'Teacher 1:__________'}</span></p>
                                <p className=""><span id="prevTeacher2">{formData.teacher2 || 'Teacher 2:__________'}</span></p>
                            </div>)}


                            <div id="SubmittedBy" className="flex flex-col text-[11px]" style={boxStyle}>
                                <h2 className="text-[14px] font-bold" id="SBH" style={{ color: `${formData.headingColor}` }}>Submitted By:</h2>
                                <p className=""><span>Name:</span> <span id="prevName">{formData.fullName || '___________'}</span></p>
                                <p className=""><span>Regd. No:</span> <span id="prevRoll">{formData.regdNo || '___________'}</span></p>
                                <p className=""><span>Branch:</span> <span id="prevBranch">{formData.branch || '___________'}</span></p>
                                <p className=""><span>Semester:</span> <span id="prevSemester">{formData.semester || '___________'}</span></p>
                                <p className=""><span>Section:</span> <span id="prevSection">{formData.section || '___________'}</span></p>
                                <p className=""><span>Group:</span> <span id="prevGroup">{formData.group || '___________'}</span></p>
                                {formData.subGroup && (
                                    <p className=""><span>Subgroup:</span> <span id="prevSubGroup">{formData.subGroup}</span></p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};