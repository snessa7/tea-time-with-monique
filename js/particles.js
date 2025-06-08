// Tea Leaves Animation
(function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const particlesContainer = document.getElementById('particles');
    
    particlesContainer.appendChild(canvas);
    
    let teaLeaves = [];
    let mouseX = 0;
    let mouseY = 0;
    
    // Canvas setup
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Tea Leaf class
    class TeaLeaf {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 2;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 0.5 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.swayAmount = Math.random() * 30 + 10;
            this.swaySpeed = Math.random() * 0.02 + 0.01;
            this.time = Math.random() * Math.PI * 2;
        }        
        update() {
            // Add swaying motion
            this.time += this.swaySpeed;
            this.x += this.speedX + Math.sin(this.time) * this.swayAmount * 0.01;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;
            
            // Wrap around edges
            if (this.x > canvas.width + 20) this.x = -20;
            if (this.x < -20) this.x = canvas.width + 20;
            if (this.y > canvas.height + 20) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
            
            // Mouse interaction - tea leaves swirl away
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                this.x -= dx * force * 0.03;
                this.y -= dy * force * 0.03;
                this.rotation += force * 0.1;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            
            // Draw tea leaf shape
            ctx.fillStyle = `rgba(139, 90, 60, ${this.opacity})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size * 2, this.size, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Add detail line
            ctx.strokeStyle = `rgba(139, 90, 60, ${this.opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(-this.size * 1.5, 0);
            ctx.lineTo(this.size * 1.5, 0);
            ctx.stroke();
            
            ctx.restore();
        }
    }    
    // Initialize tea leaves
    function init() {
        teaLeaves = [];
        const leafCount = Math.min(50, window.innerWidth / 20);
        
        for (let i = 0; i < leafCount; i++) {
            teaLeaves.push(new TeaLeaf());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        teaLeaves.forEach(leaf => {
            leaf.update();
            leaf.draw();
        });
        
        requestAnimationFrame(animate);
    }    
    // Event listeners
    window.addEventListener('resize', () => {
        resizeCanvas();
        init();
    });
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Initialize
    resizeCanvas();
    init();
    animate();
})();