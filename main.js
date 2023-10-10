const categoriesSection = document.querySelector('#categories');

function goToCategories() {
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
}

function goToCategoryByIndex(sectionIndex) {
    const targetCategorySection = document.querySelector(`#category-${sectionIndex}`);

    targetCategorySection.scrollIntoView({ behavior: 'smooth' });
}

function toggleQuestionCover(coverElement) {
    if (coverElement.classList.contains('question-cover')) {
        coverElement.classList.remove('question-cover');
        coverElement.classList.add('question-cover__hidden');
    } else {
        coverElement.classList.remove('question-cover__hidden');
        coverElement.classList.add('question-cover');
        coverElement.parentElement.lastElementChild.classList.add('answer-cover');
        coverElement.parentElement.lastElementChild.classList.remove('answer-cover__hidden');
    }
}

function toggleAnswerCover(coverElement) {
    if (coverElement.classList.contains('answer-cover')) {
        coverElement.classList.remove('answer-cover');
        coverElement.classList.add('answer-cover__hidden');
    } else {
        coverElement.classList.remove('answer-cover__hidden');
        coverElement.classList.add('answer-cover');
    }
}

function goToFinishSection() {
    const endSection = document.querySelector('#end-section');

    endSection.scrollIntoView({ behavior: 'smooth' });
}

function goToStartSection() {
    const startSection = document.querySelector('#start-section');

    startSection.scrollIntoView({ behavior: 'smooth' });
}