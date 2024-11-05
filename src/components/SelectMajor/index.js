import './styles.css';

function SelectMajor({ type, value, setValue }) {
  if (type === 'College of Humanities') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          Select your major
        </option>
        <option value="korean-language-literature">
          Department of Korean Language and Literature
        </option>
        <option value="english-language-literature">
          Department of English Language and Literature
        </option>
        <option value="history">Department of History</option>
        <option value="philosophy">Department of Philosophy</option>
        <option value="french-language-literature">
          Department of French Language and Literature
        </option>
        <option value="german-language-literature">
          Department of German Language and Literature
        </option>
        <option value="chinese-language-literature">
          Department of Chinese Language and Literature
        </option>
        <option value="archaeology-anthropology">
          Department of Archaeology and Anthropology
        </option>
        <option value="japanese-language-literature">
          Department of Japanese Language and Literature
        </option>
        <option value="korean-literature-classical-chinese">
          Department of Korean Literature in Classical Chinese
        </option>
        <option value="russian-language-literature">
          Department of Russian Language and Literature
        </option>
      </select>
    );
  } else if (type === 'College of Social Sciences') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="political-science-diplomacy">
          Department of Political Science and Diplomacy
        </option>
        <option value="sociology">Department of Sociology</option>
        <option value="geography">Department of Geography</option>
        <option value="library-information-science">
          Department of Library and Information Science
        </option>
        <option value="psychology">Department of Psychology</option>
        <option value="social-welfare">School of Social Welfare</option>
        <option value="media-communication">
          Department of Media and Communication
        </option>
      </select>
    );
  } else if (type === 'College of Natural Sciences') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="mathematics">Department of Mathematics</option>
        <option value="physics">Department of Physics</option>
        <option value="chemistry">Department of Chemistry</option>
        <option value="statistics">Department of Statistics</option>
        <option value="biotechnology">Major in Biotechnology</option>
        <option value="biology">Major in Biology</option>
        <option value="earth-system-sciences">
          School of Earth System Sciences
        </option>
        <option value="geology">Department of Geology</option>
        <option value="astronomy-atmospheric-sciences">
          Department of Astronomy and Atmospheric Sciences
        </option>
        <option value="oceanography">Department of Oceanography</option>
      </select>
    );
  } else if (type === 'College of Economics & Business Administration') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="School of Economics and Trade">
          School of Economics and Trade
        </option>
        <option value="School of Business Administration">
          School of Business Administration
        </option>
      </select>
    );
  } else if (type === 'College of Engineering') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="materials-science-metallurgical-engineering">
          Major in Materials Science and Metallurgical Engineering
        </option>
        <option value="electronic-materials-science-engineering">
          Major in Electronic Materials Science and Engineering
        </option>
        <option value="mechanical-engineering-school">
          School of Mechanical Engineering
        </option>
        <option value="mechanical-engineering">
          Major in Mechanical Engineering
        </option>
        <option value="architecture">Major in Architecture</option>
        <option value="architectural-engineering">
          Major in Architectural Engineering
        </option>
        <option value="civil-engineering">
          Department of Civil Engineering
        </option>
        <option value="energy-engineering-school">
          School of Energy Engineering
        </option>
        <option value="polymer-science-engineering">
          Department of Polymer Science Engineering
        </option>
        <option value="applied-chemistry">
          Department of Applied Chemistry
        </option>
        <option value="chemical-engineering">
          Department of Chemical Engineering
        </option>
        <option value="textile-system-engineering">
          Department of Textile System Engineering
        </option>
        <option value="environmental-engineering">
          Department of Environmental Engineering
        </option>
      </select>
    );
  } else if (type === 'College of IT Engineering') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="electronics-engineering-school">
          School of Electronics Engineering
        </option>
        <option value="computer-science-engineering-school">
          School of Computer Science and Engineering
        </option>
        <option value="electrical-engineering">
          Department of Electrical Engineering
        </option>
        <option value="mobile-engineering">
          Department of Mobile Engineering
        </option>
      </select>
    );
  } else if (type === 'College of Agriculture and Life Sciences') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="applied-life-science-school">
          School of Applied Life Science
        </option>
        <option value="plant-biosciences-major">
          Major in Plant Biosciences
        </option>
        <option value="environment-life-science-major">
          Major in Environment and Life Science
        </option>
        <option value="applied-biology-department">
          Department of Applied Biology
        </option>
        <option value="food-science-school">School of Food Science</option>
        <option value="food-bio-industry-major">
          Major in Food Bio-Industry
        </option>
        <option value="food-material-major">Major in Food Material</option>
        <option value="food-applied-engineering-major">
          Major in Food Applied Engineering
        </option>
        <option value="forestry-major">Major in Forestry</option>
        <option value="wood-paper-science-major">
          Major in Wood & Paper Science
        </option>
        <option value="landscape-architecture-major">
          Major in Landscape Architecture
        </option>
        <option value="agricultural-civil-engineering-major">
          Major in Agricultural Civil Engineering
        </option>
        <option value="bio-industrial-machinery-engineering-major">
          Major in Bio-industrial Machinery Engineering
        </option>
        <option value="horticultural-science-department">
          Department of Horticultural Science
        </option>
        <option value="bio-fibers-materials-science-department">
          Department of Bio-fibers and Materials Science
        </option>
        <option value="food-resource-economics-department">
          Department of Food and Resource Economics
        </option>
        <option value="farm-management-department">
          Department of Farm Management
        </option>
      </select>
    );
  } else if (type === 'College of Music and Visual Arts') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="music-department">Department of Music</option>
        <option value="korean-traditional-music-department">
          Department of Korean Traditional Music
        </option>
        <option value="fine-arts-department">Department of Fine Arts</option>
        <option value="design-department">Department of Design</option>
      </select>
    );
  } else if (type === 'Teachers College') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="european-language-education-school">
          School of European Language Education
        </option>
        <option value="german-language-education">
          Department of German Language Education
        </option>
        <option value="french-language-education">
          Department of French Language Education
        </option>
        <option value="history-education">
          Department of History Education
        </option>
        <option value="geography-education">
          Department of Geography Education
        </option>
        <option value="social-studies-education">
          Department of Social Studies Education
        </option>
        <option value="physics-education">
          Department of Physics Education
        </option>
        <option value="chemistry-education">
          Department of Chemistry Education
        </option>
        <option value="biology-education">
          Department of Biology Education
        </option>
        <option value="earth-science-education">
          Department of Earth Science Education
        </option>
        <option value="education-department">Department of Education</option>
        <option value="korean-language-education">
          Department of Korean Language and Literature Education
        </option>
        <option value="english-education">
          Department of English Education
        </option>
        <option value="ethics-education">Department of Ethics Education</option>
        <option value="mathematics-education">
          Department of Mathematics Education
        </option>
        <option value="home-economics-education">
          Department of Home Economics Education
        </option>
        <option value="physical-education">
          Department of Physical Education
        </option>
      </select>
    );
  } else if (type === 'College of Medicine') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="medicine">Department of Medicine</option>
        <option value="pre-medicine">Department of Pre-medicine</option>
      </select>
    );
  } else if (type === 'College of Dentistry') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="Department of Dentistry">Department of Dentistry</option>
      </select>
    );
  } else if (type === 'College of Veterinary Medicine') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="College of Veterinary Medicine">
          College of Veterinary Medicine
        </option>
      </select>
    );
  } else if (type === 'College of Human Ecology') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="child-studies">School of Child Studies</option>
        <option value="child-family-studies">
          Major in Child and Family Studies
        </option>
        <option value="child-studies-major">Major in Child Studies</option>
        <option value="clothing-textiles">
          Department of Clothing and Textiles
        </option>
        <option value="food-science-nutrition">
          Department of Food Science and Nutrition
        </option>
      </select>
    );
  } else if (type === 'College of Nursing') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="Department of Nursing">Department of Nursing</option>
      </select>
    );
  } else if (type === 'College of Pharmacy') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="Department of Pharmacy">Department of Pharmacy</option>
      </select>
    );
  } else if (type === 'College of Ecology and Environmental Science') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="ecology-environmental-system">
          School of Ecology & Environmental System
        </option>
        <option value="plant-resources-environment">
          Major in Plant Resources Environment
        </option>
        <option value="forest-environmental-science">
          Major in Forest Environmental Science
        </option>
        <option value="ecological-environment-eco-tourism">
          School of Ecological Environment & Eco-tourism
        </option>
        <option value="entomology">Department of Entomology</option>
        <option value="tourism">Department of Tourism</option>
        <option value="leisure-sports">Department of Leisure Sports</option>
        <option value="animal-science">Department of Animal Science</option>
        <option value="animal-biotechnology">
          Department of Animal Biotechnology
        </option>
        <option value="horse-companion-wild-animal-science">
          Department of Horse/Companion and Wild Animal Science
        </option>
      </select>
    );
  } else if (type === 'College of Science and Technology') {
    return (
      <select
        name="departments"
        id="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="disaster-prevention-environmental-engineering">
          School of Disaster Prevention and Environmental Engineering
        </option>
        <option value="constructional-environmental-engineering">
          Major in Constructional Environmental Engineering
        </option>
        <option value="construction-disaster-prevention-engineering">
          Major in Construction and Disaster Prevention Engineering
        </option>
        <option value="eco-friendly-automotive">
          Major in Eco-friendly Automotive
        </option>
        <option value="intelligent-automotive">
          Major in Intelligent Automotive
        </option>
        <option value="textile-engineering">
          Major in Textile Engineering
        </option>
        <option value="fashion-design">Major in Fashion Design</option>
        <option value="aeronautical-satellite-system-engineering">
          Major in Aeronautical Satellite System Engineering
        </option>
        <option value="plant-system-engineering">
          Major in Plant System Engineering
        </option>
        <option value="nano-materials-science-engineering">
          School of Nano & Materials Science and Engineering
        </option>
        <option value="energy-chemical-engineering">
          Major in Energy Chemical Engineering
        </option>
        <option value="new-materials-engineering">
          Major in New Materials Engineering
        </option>
        <option value="precision-mechanical-engineering">
          Department of Precision Mechanical Engineering
        </option>
        <option value="computer-software">
          Department of Computer Software
        </option>
        <option value="food-food-service-industry">
          Department of Food and Food Service Industry
        </option>
        <option value="dental-hygienics">Department of Dental Hygienics</option>
        <option value="computer-system-engineering">
          Major in Computer System Engineering
        </option>
      </select>
    );
  } else if (type === 'School of Health and Welfare') {
    return (
      <select
        id="departments"
        name="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="Major in Senile Health Welfare">
          Major in Senile Health Welfare
        </option>
      </select>
    );
  } else if (type === 'Global Leaders School') {
    return (
      <select
        id="departments"
        name="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="Global Leaders School">Global Leaders School</option>
      </select>
    );
  } else if (type === 'School of Public Administration') {
    return (
      <select
        id="departments"
        name="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="School of Public Administration">
          School of Public Administration
        </option>
      </select>
    );
  } else if (type === 'Undeclared Majors') {
    return (
      <select
        id="departments"
        name="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="Undeclared Major">Undeclared Major</option>
      </select>
    );
  } else if (
    type === 'School of Science Technology, Biology and Undeclared Majors'
  ) {
    return (
      <select
        id="departments"
        name="departments"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          your major
        </option>
        <option value="School of Science Technology, Biology and Undeclared Majors">
          School of Science Technology, Biology and Undeclared Majors
        </option>
      </select>
    );
  }

  return null;
}

export default SelectMajor;
