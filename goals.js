document.addEventListener('DOMContentLoaded', function() {
    const goalsList = document.getElementById('goalsList');

    // Simulated data for goals specific to Apple (replace with actual data retrieval logic)
    const goals = [
        { name: 'Research & Development Investment', goalAmount: 5000000, currentAmount: 3000000 },
        { name: 'Environmental Sustainability Initiatives', goalAmount: 1000000, currentAmount: 750000 },
        { name: 'Expansion of Retail Presence', goalAmount: 2000000, currentAmount: 1200000 }
    ];

    // Populate goals list on page load
    goals.forEach(goal => {
        addGoal(goal.name, goal.goalAmount, goal.currentAmount);
    });

    function addGoal(name, goalAmount, currentAmount) {
        const li = document.createElement('li');
        li.classList.add('goal-item');

        const progress = Math.min((currentAmount / goalAmount) * 100, 100).toFixed(2);

        li.innerHTML = `
            <h3>${name}</h3>
            <div class="goal-progress">
                <div class="goal-progress-bar" style="width: ${progress}%"></div>
            </div>
            <p>$${currentAmount.toLocaleString()} / $${goalAmount.toLocaleString()}</p>
        `;

        goalsList.appendChild(li);
    }
});
