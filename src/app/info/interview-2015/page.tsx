import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Interview with Jaap Goedemoed (2015) | Jaap Goedemoed',
  description: 'An in-depth interview with artist Jaap Goedemoed from 2015, discussing his artistic philosophy and creative process.',
};

export default function InterviewPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2019/01/Jaap-and-Alexander-27-June-2015-copy.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">An Interview with Jaap Goedemoed</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Conducted by Alexander Verhaegen, June 2015
          </p>
        </div>
      </div>
      
      {/* Interview Introduction Section */}
      <div className="bg-background-light py-16">
        <div className="container-narrow">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-[3/4] shadow-xl">
                <Image 
                  src="/2019/01/Jaap-and-Alexander-27-June-2015-copy.jpg"
                  alt="Jaap Goedemoed and Alexander Verhaegen, 2015"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-serif mb-4 text-text-accent">Introduction</h2>
              
              <div className="space-y-4 text-text">
                <p>
                  The following interview was conducted at Jaap Goedemoed's Amsterdam studio on June 27, 2015, 
                  by art critic and curator Alexander Verhaegen. This conversation took place during a pivotal 
                  period in Goedemoed's career, just prior to his exhibition at Baut Zuid in Amsterdam and 
                  following a series of significant new works exploring pentagonal structures and architectural forms.
                </p>
                
                <p>
                  The interview provides valuable insights into Goedemoed's creative process, his philosophical 
                  approach to geometric abstraction, and the various cultural and intellectual influences that 
                  have shaped his artistic development. The conversation has been lightly edited for clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interview Content */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <h2>The Interview</h2>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              Alexander Verhaegen: I'd like to begin by asking about your earliest artistic influences. When did you first become interested in geometric abstraction?
            </p>
            
            <p>
              <span className="font-medium">Jaap Goedemoed:</span> My interest in geometric forms can be traced back to childhood, actually. 
              I was always fascinated by architectural drawings and technical illustrations. My father was an engineer, and I would 
              spend hours looking through his technical manuals and blueprints. But in terms of geometric abstraction as an artistic 
              approach, that came later, during my studies at the Rietveld Academie.
            </p>
            
            <p>
              Initially, I was working in a more expressionistic manner, but I gradually became drawn to more structured approaches. 
              Mondrian was an early influence, of course—it's almost impossible for a Dutch artist interested in abstraction to avoid his shadow. 
              But I was equally drawn to the more complex geometric structures you find in Islamic art and various non-Western traditions.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              AV: Your work often features pentagonal structures and divisions, which are less common in geometric abstraction than hexagonal or square-based patterns. What draws you to the pentagon?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> The pentagon represents a fascinating problem in mathematics and visual organization. 
              Unlike hexagons or squares, regular pentagons cannot tile a plane without leaving gaps. This inherent "problem" or 
              limitation is precisely what interests me—how to work with and around this constraint.
            </p>
            
            <p>
              In many ways, the pentagon serves as a metaphor for the artistic process itself: how to reconcile structure with 
              improvisation, order with unpredictability. When you try to create a pattern with pentagons, you inevitably have 
              to introduce variations, distortions, or additional elements. This necessity of adaptation and invention within constraints 
              mirrors how I think about creativity more broadly.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              AV: Your ethnographic collection seems to play an important role in your creative life. Could you talk about how these objects influence your work?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> My interest in ethnographic objects emerged somewhat parallel to my development as an artist. 
              I've always been fascinated by how different cultures solve visual and structural problems—how they organize space, 
              create pattern, encode meaning through abstract forms.
            </p>
            
            <p>
              The ethnographic influence came via modernist artists like Paul Klee and Max Ernst initially—seeing how they engaged 
              with non-Western visual traditions. But over time, I developed my own direct relationship with these cultural expressions, 
              particularly from Oceania and Africa.
            </p>
            
            <p>
              What strikes me most about many of these objects is their sophisticated integration of geometric and organic elements, 
              their treatment of surface and structure as inseparable aspects of the same entity. This unity is something I strive 
              for in my own work—where the pattern or structure isn't applied to a surface but emerges from the very logic of the 
              composition itself.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              AV: Your recent works seem to incorporate more complex color relationships than some of your earlier pieces. Has your approach to color evolved?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> Absolutely. Color has become increasingly important in my work. In my earlier pieces, 
              I was primarily concerned with structural elements, and color often played a secondary role—more about clarifying 
              the geometry than creating its own dynamic.
            </p>
            
            <p>
              Over time, I've become more interested in how color can create spatial ambiguities and perceptual vibrations that 
              activate the geometric structure. I'm particularly drawn to transitional color states—colors that seem to shift 
              their identity depending on their context and the quality of light.
            </p>
            
            <p>
              I spend much more time now developing color relationships through studies and preparatory work. I often create 
              small-scale models where I can test different color combinations before committing to the final piece. It's become 
              a more systematic process, though still guided by intuition at key moments.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              AV: Your studio is filled with books on mathematics, architecture, and philosophy. How do these theoretical interests inform your practice?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> Theory doesn't directly generate my work, but it does provide frameworks and problems 
              that stimulate my thinking. I'm particularly interested in mathematical concepts related to tiling, symmetry, and 
              topology. Roger Penrose's work on aperiodic tiling patterns has been especially influential.
            </p>
            
            <p>
              Philosophically, I'm drawn to ideas about how humans organize knowledge and experience—how we create systems of meaning 
              and pattern to make sense of complexity. Foucault's "The Order of Things" was an important text for me, as were 
              Douglas Hofstadter's explorations of pattern, meaning, and consciousness.
            </p>
            
            <p>
              But I'm wary of becoming too cerebral. The physical process of making—the direct engagement with materials and 
              visual decisions—remains the core of my practice. Theory provides questions and provocations, but the answers 
              emerge through making.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-accent">
              AV: What are you currently working on, and how do you see your practice evolving in the coming years?
            </p>
            
            <p>
              <span className="font-medium">JG:</span> I'm currently developing a series that explores the relationship between two and three dimensions 
              more explicitly. I'm interested in how flat geometric patterns can suggest spatial depth and even seem to fold into 
              three-dimensional forms through color relationships and slight distortions of the underlying geometry.
            </p>
            
            <p>
              Looking ahead, I'm increasingly drawn to the possibility of creating actual three-dimensional works—sculptural 
              pieces that extend my exploration of pattern and structure into physical space. I've been making small-scale models 
              and maquettes, testing different approaches.
            </p>
            
            <p>
              I'm also interested in the possibilities of digital tools, not as a replacement for physical making but as a means 
              of exploring complex pattern variations that would be difficult to calculate manually. That said, I remain committed 
              to the materiality of painting and object-making—the physical presence of the work remains essential to how I think about art.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/info" className="btn">
              Return to Additional Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
