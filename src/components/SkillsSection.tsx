import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cpu, Globe } from 'lucide-react';
const SkillsSection = () => {
  const skillCategories = [{
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Objective-C', 'C++', 'SQL', 'MATLAB'],
    color: 'text-primary'
  }, {
    title: 'Frameworks & Libraries',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'TensorFlow', 'MATLAB'],
    color: 'text-accent'
  }, {
    title: 'Technologies',
    icon: Cpu,
    skills: ['Machine Learning', 'Deep Learning', 'Git', 'Weights & Biases', 'Feature Engineering', 'Kaggle'],
    color: 'text-primary'
  }, {
    title: 'Languages',
    icon: Globe,
    skills: ['English (Professional)', 'Bengali (Native)', 'Hindi (Limited Proficiency)'],
    color: 'text-accent'
  }];
  return <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">A comprehensive toolkit for building intelligent systems and solving complex problems</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return <Card key={category.title} className="border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-3 ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => <Badge key={skill} variant="secondary" className="bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Specialized in <span className="text-primary">AI & Machine Learning</span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">With a strong focus on Deep Learning architectures, Neural Networks, Machine Learning problems and hypothesis, I bring both theoretical knowledge and practical implementation skills to every project.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SkillsSection;