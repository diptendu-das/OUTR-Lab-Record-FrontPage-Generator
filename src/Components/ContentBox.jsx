import { Form } from "./Form"
import { Preview } from "./Preview"
import { useState } from "react"

export const ContentBox = ({ downloadPDF }) => {

    const initialFormData = {
        collegeColor: '#972525',
        deptName: '',
        deptColor: '#275b38',
        labSubject: '',
        labSubjectColor: 'blue',
        subjectCode: '',
        fullName: '',
        regdNo: '',
        branch: '',
        semester: '',
        section: '',
        group: '',
        subGroup: '',
        headingColor: 'rgb(103, 74, 130)',
        teacher1: '',
        teacher2: '',
        boxThemeColor: '#ADD8E6',
    }
    const [formData, setFormData] = useState(initialFormData)
    const [isSubmitTo, setIsSubmitTo] = useState(false)
    const [boxThemeToggle, setBoxThemeToggle] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleReset = () => {
        setFormData(initialFormData);
        setIsSubmitTo(false);
        setBoxThemeToggle(false);

        // Scroll the form container to the top smoothly
        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            formContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Fallback for mobile where the window might be the scroller
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <div className="flex flex-col lg:flex-row grow pt-[50px]">
            <Form
                formData={formData}
                handleChange={handleChange}
                handleReset={handleReset}
                isSubmitTo={isSubmitTo}
                setIsSubmitTo={setIsSubmitTo}
                boxThemeToggle={boxThemeToggle}
                setBoxThemeToggle={setBoxThemeToggle}
                downloadPDF={downloadPDF}
            />
            <Preview formData={formData} isSubmitTo={isSubmitTo} boxThemeToggle={boxThemeToggle} />
        </div>
    )
}
