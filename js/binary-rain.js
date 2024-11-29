class BinaryRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'binary-rain';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.characters = '01';
        this.fontSize = 20;
        this.columns = 0;
        this.drops = [];
        
        this.initRain();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initRain();
    }
    
    initRain() {
        this.ctx.font = `${this.fontSize}px monospace`;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }
    
    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for(let i = 0; i < this.drops.length; i++) {
            const char = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            this.ctx.fillText(char, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
    }
    
    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}
