     
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            document.getElementById('hearts-container').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        setInterval(createFloatingHeart, 800);

        document.getElementById("calculate").addEventListener("click", function() {
            const name = document.getElementById('yourName').value.trim();
            const crushname = document.getElementById('crushName').value.trim();
            const result = document.getElementById("result");
            const button = this;

            if (name === "" || crushname === "") {
                result.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter both names!';
                result.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8e8e)';
                result.style.webkitBackgroundClip = 'text';
                result.style.webkitTextFillColor = 'transparent';
                return;
            }

            button.innerHTML = '<div class="loading"></div> Calculating...';
            button.disabled = true;

            setTimeout(() => {
             
                const n = Math.floor(Math.random() * 100) + 1;
                
                let message = "";
                let emoji = "";
                
                if(n > 90) {
                    message = "You are made for each other!";
                    emoji = "💕💖💕";
                } else if(n > 70 && n <= 90) {
                    message = "You are a good match!";
                    emoji = "💝💗💝";
                } else if(n > 40 && n <= 70) {
                    message = "You can be friends!";
                    emoji = "💛💚💛";
                } else {
                    message = "Maybe try someone else!";
                    emoji = "💔😅💔";
                }

                result.innerHTML = `
                    <div>${emoji}</div>
                    <div><strong>${name}</strong> and <strong>${crushname}</strong></div>
                    <div class="percentage-display">${n}%</div>
                    <div>${message}</div>
                `;

                button.innerHTML = '<i class="fas fa-magic"></i> Calculate Love <i class="fas fa-magic"></i>';
                button.disabled = false;

                if(n > 80) {
                    createCelebration();
                }
            }, 1500);
        });

        function createCelebration() {
            for(let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
                    heart.style.position = 'fixed';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.top = '100%';
                    heart.style.fontSize = '2rem';
                    heart.style.zIndex = '1000';
                    heart.style.pointerEvents = 'none';
                    heart.style.animation = 'floatUp 3s ease-out forwards';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 3000);
                }, i * 100);
            }
        }

        document.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                document.getElementById('calculate').click();
            }
        });

const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentNode.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentNode.style.transform = 'scale(1)';
            });
        });