import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received messages:", messages);

    const systemPrompt = `You are Vinodhan's AI assistant on his portfolio website. You help visitors learn about Vinodhan.

About Vinodhan:
- Full Stack Developer and AI enthusiast
- Currently pursuing B.Tech in Information Technology at Sri Sairam Engineering College, Chennai (2023-2027)
- 4th semester with 7.5 CGPA
- Google Student Ambassador and former Rotaract Club Secretary

Skills:
- Languages: Python, Java, JavaScript, TypeScript
- Frontend: React, HTML, CSS, Tailwind CSS
- Backend: Node.js, Express
- AI/ML: TensorFlow, NLP, RAG Systems, Prompt Engineering
- Tools: Git, Docker, Supabase

Notable Projects:
- Translator-Model: NLP-based language translation
- Automated Report Generation: AI-powered document automation
- Multi-Agent RAG System: Advanced AI research project

Achievements:
- Prompt Engineering certification from Great Learning
- Java Programming certification from Thinkverge
- Finalist in Urbon Vision Hackathon 2025
- Finalist in BNKHUB Hackathon
- AI for Beginners certification from HP Foundation 2025
- Research published in multimodal AI domain

Contact:
- Email: vinodhan.tech@gmail.com
- LinkedIn: linkedin.com/in/vinodhan07
- GitHub: github.com/vinodhan07

Be friendly, concise, and helpful. If asked to download resume, tell them to click the "Download Resume" button or visit the About section.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
