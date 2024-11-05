import './styles.css';

function SelectCollege({ value, setValue }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="" disabled>
        Select College
      </option>
      <option value="College of Humanities">College of Humanities</option>
      <option value="College of Social Sciences">
        College of Social Sciences
      </option>
      <option value="College of Natural Sciences">
        College of Natural Sciences
      </option>
      <option value="College of Economics & Business Administration">
        College of Economics & Business Administration
      </option>
      <option value="College of Engineering">College of Engineering</option>
      <option value="College of IT Engineering">
        College of IT Engineering
      </option>
      <option value="College of Agriculture and Life Sciences">
        College of Agriculture and Life Sciences
      </option>
      <option value="College of Music and Visual Arts">
        College of Music and Visual Arts
      </option>
      <option value="Teachers College">Teachers College</option>
      <option value="College of Medicine">College of Medicine</option>
      <option value="College of Dentistry">College of Dentistry</option>
      <option value="College of Veterinary Medicine">
        College of Veterinary Medicine
      </option>
      <option value="College of Human Ecology">College of Human Ecology</option>
      <option value="College of Nursing">College of Nursing</option>
      <option value="College of Pharmacy">College of Pharmacy</option>
      <option value="College of Ecology and Environmental Science">
        College of Ecology and Environmental Science
      </option>
      <option value="College of Science and Technology">
        College of Science and Technology
      </option>
      <option value="School of Health and Welfare">
        School of Health and Welfare
      </option>
      <option value="Global Leaders School">Global Leaders School</option>
      <option value="School of Public Administration">
        School of Public Administration
      </option>
      <option value="Undeclared Majors">Undeclared Majors</option>
      <option value="School of Science Technology, Biology and Undeclared Majors">
        School of Science Technology, Biology and Undeclared Majors
      </option>
    </select>
  );
}

export default SelectCollege;
