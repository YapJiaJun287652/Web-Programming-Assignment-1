document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelector('#skills ul');
    const skillItems = skills.querySelectorAll('li');
    const maxVisibleSkills = 2; 
    let isSkillsExpanded = false;

    function showSkills() {
        skillItems.forEach((item, index) => {
            if (index < maxVisibleSkills || isSkillsExpanded) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function toggleSkills() {
        isSkillsExpanded = !isSkillsExpanded;
        showSkills();
        const moreButton = document.querySelector('#skills .more');
        moreButton.textContent = isSkillsExpanded ? 'Less' : 'More';
    }
 
    showSkills();

    const moreButton = document.querySelector('#skills .more');
    if (moreButton) {
        moreButton.addEventListener('click', toggleSkills);
    }

    const workExperienceSection = document.querySelector('#work-experience');
    const workToggleButton = workExperienceSection.querySelector('.toggle-button');
    const workContent = workExperienceSection.querySelector('.content');

    let isWorkExperienceExpanded = false;

    function toggleWorkExperience() {
        isWorkExperienceExpanded = !isWorkExperienceExpanded;
        workContent.style.display = isWorkExperienceExpanded ? 'block' : 'none';
        workToggleButton.textContent = isWorkExperienceExpanded ? 'Collapse' : 'Expand';
    }

    workContent.style.display = 'none';

    workToggleButton.addEventListener('click', toggleWorkExperience);
});
