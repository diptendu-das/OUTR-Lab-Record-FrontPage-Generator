import React, { useState } from 'react';
import { Info } from 'lucide-react';

export const Form = ({ formData, handleChange, handleReset, isSubmitTo, setIsSubmitTo, boxThemeToggle, setBoxThemeToggle, downloadPDF }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div id="form-container" className="w-full lg:w-1/2 bg-slate-100 border-r border-slate-300 p-6 lg:p-10 flex flex-col items-center overflow-y-auto hide-scrollbar relative" style={{ maxHeight: '100vh' }}>
            {/* Subtle background gradient blob for aesthetics */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-40 rounded-b-full pointer-events-none blur-3xl"></div>

            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl flex flex-col gap-8 relative z-10">

                <div className="pb-2 text-center lg:text-left">
                    <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">
                        Lab Record Front Page <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Generator</span>
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">Design your professional cover page instantly.</p>
                </div>

                {/* --- Section: Colors --- */}
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col gap-5 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">🎨</span>
                        Theme Colors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex items-center justify-between bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 cursor-pointer hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                            <label className="text-sm font-semibold text-slate-700 cursor-pointer w-full group-hover:text-blue-700 transition-colors" htmlFor="collegeColor">College Text Color</label>
                            <div className="relative">
                                <input type="color" name="collegeColor" value={formData.collegeColor} onChange={handleChange} id="collegeColor" className="w-10 h-10 rounded-full shrink-0 cursor-pointer border-none opacity-0 absolute inset-0 z-10" />
                                <div className="w-10 h-10 rounded-full shadow-inner border-2 border-white ring-2 ring-slate-200 group-hover:ring-blue-300 transition-all pointer-events-none" style={{ backgroundColor: formData.collegeColor }}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 cursor-pointer hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                            <label className="text-sm font-semibold text-slate-700 cursor-pointer w-full group-hover:text-blue-700 transition-colors" htmlFor="headingColor">Heading Text Color</label>
                            <div className="relative">
                                <input type="color" name="headingColor" value={formData.headingColor} onChange={handleChange} id="headingColor" className="w-10 h-10 rounded-full shrink-0 cursor-pointer border-none opacity-0 absolute inset-0 z-10" />
                                <div className="w-10 h-10 rounded-full shadow-inner border-2 border-white ring-2 ring-slate-200 group-hover:ring-blue-300 transition-all pointer-events-none" style={{ backgroundColor: formData.headingColor }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Section: Academic Details --- */}
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col gap-5 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">📚</span>
                        Academic Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2 md:col-span-2 group">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Department Name</label>
                                <div className="relative">
                                    <input type="color" name="deptColor" value={formData.deptColor} onChange={handleChange} title="Text Color" className="w-6 h-6 rounded-full cursor-pointer border-none opacity-0 absolute inset-0 z-10" />
                                    <div className="w-6 h-6 rounded-full shadow-inner border-2 border-white ring-1 ring-slate-200 hover:ring-blue-300 transition-all pointer-events-none" style={{ backgroundColor: formData.deptColor }}></div>
                                </div>
                            </div>
                            <input type="text" name="deptName" value={formData.deptName} onChange={handleChange} placeholder="e.g. School of Electrical Sciences" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2 group">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Lab Subject</label>
                                <div className="relative">
                                    <input type="color" name="labSubjectColor" value={formData.labSubjectColor} onChange={handleChange} title="Text Color" className="w-6 h-6 rounded-full cursor-pointer border-none opacity-0 absolute inset-0 z-10" />
                                    <div className="w-6 h-6 rounded-full shadow-inner border-2 border-white ring-1 ring-slate-200 hover:ring-blue-300 transition-all pointer-events-none" style={{ backgroundColor: formData.labSubjectColor }}></div>
                                </div>
                            </div>
                            <input type="text" name="labSubject" value={formData.labSubject} onChange={handleChange} placeholder="e.g. Electrical Machines Lab" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Subject Code</label>
                            <input type="text" name="subjectCode" value={formData.subjectCode} onChange={handleChange} placeholder="e.g. EE2203" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* --- Section: Student Details --- */}
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col gap-5 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">🧑‍🎓</span>
                        Student Details
                    </h3>

                    <div className="flex flex-col gap-2 group">
                        <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                        <div className="flex flex-col gap-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Regd. No / Roll No</label>
                            <input type="text" name="regdNo" value={formData.regdNo} onChange={handleChange} placeholder="e.g. 24110569" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Branch</label>
                            <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="e.g. EE" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Semester</label>
                            <input type="text" name="semester" value={formData.semester} onChange={handleChange} placeholder="e.g. 4th" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Section</label>
                            <input type="text" name="section" value={formData.section} onChange={handleChange} placeholder="e.g. B" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Group</label>
                            <input type="text" name="group" value={formData.group} onChange={handleChange} placeholder="e.g. G2" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Subgroup <span className="text-slate-400 font-normal">(Opt)</span></label>
                            <input type="text" name="subGroup" value={formData.subGroup} onChange={handleChange} placeholder="e.g. 2" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* --- Section: Submission Details --- */}
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col gap-5 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <h3 className="font-bold text-lg text-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm">📝</span>
                            Submission Info
                        </div>
                    </h3>

                    <label className="flex items-center gap-3 cursor-pointer mt-1 group bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-200 transition-colors">
                        <div className="relative flex items-center justify-center">
                            <input type="checkbox" checked={isSubmitTo} onChange={(e) => setIsSubmitTo(e.target.checked)} className="peer w-5 h-5 opacity-0 absolute cursor-pointer" />
                            <div className="w-5 h-5 rounded border-2 border-slate-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all bg-white">
                                <svg className={`w-3.5 h-3.5 text-white ${isSubmitTo ? 'opacity-100' : 'opacity-0'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">Include "Submitted To" Section (Teachers)</span>
                    </label>

                    <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                        <label className="flex items-center gap-3 cursor-pointer group bg-slate-50 hover:bg-slate-100 p-3 rounded-xl border border-slate-200 transition-colors grow w-full md:w-auto">
                            <div className="relative flex items-center justify-center">
                                <input type="checkbox" checked={boxThemeToggle} onChange={(e) => setBoxThemeToggle(e.target.checked)} className="peer w-5 h-5 opacity-0 absolute cursor-pointer" />
                                <div className="w-5 h-5 rounded border-2 border-slate-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all bg-white">
                                    <svg className={`w-3.5 h-3.5 text-white ${boxThemeToggle ? 'opacity-100' : 'opacity-0'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                            </div>
                            <div className="relative flex items-center gap-1.5 group/tooltip">
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">Wrap Output in Styled Boxes</span>
                                <button type="button" onClick={(e) => { e.preventDefault(); setShowTooltip(!showTooltip); }} onBlur={() => setShowTooltip(false)} className="focus:outline-none">
                                    <Info className="w-4 h-4 text-slate-400 hover:text-blue-500 focus:text-blue-500 transition-colors cursor-pointer" />
                                </button>
                                <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2.5 bg-slate-800 text-slate-100 leading-tight text-xs text-center rounded-lg shadow-xl transition-all z-50 pointer-events-none font-medium ${showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible'}`}>
                                    It is an optional feature under testing, so may not work properly, so try to avoid it
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
                                </div>
                            </div>
                        </label>

                        <div className={`flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 transition-all w-full md:w-auto ${!boxThemeToggle ? 'opacity-50 pointer-events-none' : ''}`}>
                            <span className="text-sm font-semibold text-slate-700">Box Color</span>
                            <div className="relative">
                                <input type="color" name="boxThemeColor" value={formData.boxThemeColor} onChange={handleChange} title="Box Background Color" className="w-8 h-8 rounded-full cursor-pointer border-none opacity-0 absolute inset-0 z-10" />
                                <div className="w-8 h-8 rounded-full shadow-inner border-2 border-white ring-1 ring-slate-200 transition-all pointer-events-none" style={{ backgroundColor: formData.boxThemeColor }}></div>
                            </div>
                        </div>
                    </div>

                    {isSubmitTo && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex flex-col gap-2 md:col-span-2 group">
                                <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Teacher 1</label>
                                <input type="text" name="teacher1" value={formData.teacher1} onChange={handleChange} placeholder="Teacher's Name" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2 group">
                                <label className="text-sm font-semibold text-slate-700 group-focus-within:text-blue-600 transition-colors">Teacher 2 <span className="text-slate-400 font-normal">(Optional)</span></label>
                                <input type="text" name="teacher2" value={formData.teacher2} onChange={handleChange} placeholder="Teacher's Name" className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm" />
                            </div>
                        </div>
                    )}
                </div>

                {/* --- Actions --- */}
                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4 mb-16 lg:mb-8">
                    <button type="button" onClick={handleReset} className="px-6 py-3.5 rounded-2xl font-semibold text-slate-600 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-red-500 hover:border-red-200 transition-all active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:text-red-500 focus:border-red-200">
                        Reset Data
                    </button>
                    <button type="button" onClick={downloadPDF} className="px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-500 transition-all active:scale-95 active:translate-y-0 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-500/30">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Download PDF
                    </button>
                </div>

            </form>
        </div>
    );
};
