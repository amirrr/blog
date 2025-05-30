// This component has been removed for static export compatibility.
// The AI Tag Suggester feature requires a server to run Genkit flows.

// "use client";

// import { useState } from 'react';
// import { useForm, type SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Badge } from '@/components/ui/badge';
// import { Loader2, Wand2, Tag, X } from 'lucide-react';
// import { suggestBlogTags, type SuggestBlogTagsInput } from '@/ai/flows/suggest-blog-tags';
// import { useToast } from "@/hooks/use-toast";

// const formSchema = z.object({
//   blogPostContent: z.string().min(50, { message: "Blog post content must be at least 50 characters." }).max(10000, {message: "Content too long. Max 10000 characters."}),
// });

// type FormData = z.infer<typeof formSchema>;

export default function TagSuggestionForm_Disabled() {
  return (
    <div>
      <p className="text-muted-foreground">The AI Tag Suggestion form is disabled for static export.</p>
    </div>
  );
}

// Original content:
// export default function TagSuggestionForm() {
//   const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const { toast } = useToast();

//   const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: { blogPostContent: '' }
//   });

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     setIsLoading(true);
//     setSuggestedTags([]);
//     try {
//       const result = await suggestBlogTags(data as SuggestBlogTagsInput);
//       if (result && result.tags) {
//         setSuggestedTags(result.tags);
//         toast({
//           title: "Tags Suggested!",
//           description: "AI has generated tags for your post.",
//         });
//       } else {
//         toast({
//           title: "Error",
//           description: "Could not suggest tags. No tags returned.",
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       console.error("Error suggesting tags:", error);
//       toast({
//         title: "Error",
//         description: `Failed to suggest tags. ${error instanceof Error ? error.message : 'Unknown error'}`,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleClearForm = () => {
//     reset();
//     setSuggestedTags([]);
//     setValue('blogPostContent', '');
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div>
//         <Label htmlFor="blogPostContent" className="text-base font-medium text-foreground">Blog Post Content</Label>
//         <Textarea
//           id="blogPostContent"
//           {...register('blogPostContent')}
//           rows={10}
//           className="mt-2 focus:border-primary bg-background/50"
//           placeholder="Paste your blog post content here..."
//           disabled={isLoading}
//         />
//         {errors.blogPostContent && (
//           <p className="text-sm text-destructive mt-1">{errors.blogPostContent.message}</p>
//         )}
//       </div>

//       <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
//         <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
//           {isLoading ? (
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           ) : (
//             <Wand2 className="mr-2 h-4 w-4" />
//           )}
//           Suggest Tags
//         </Button>
//         <Button type="button" variant="outline" onClick={handleClearForm} disabled={isLoading} className="w-full sm:w-auto">
//             <X className="mr-2 h-4 w-4" />
//             Clear
//         </Button>
//       </div>

//       {suggestedTags.length > 0 && (
//         <div className="mt-6 p-4 border border-border rounded-md bg-secondary/30">
//           <h3 className="flex items-center text-lg font-semibold font-serif text-foreground mb-3">
//             <Tag className="mr-2 h-5 w-5 text-primary" />
//             Suggested Tags
//           </h3>
//           <div className="flex flex-wrap gap-2">
//             {suggestedTags.map((tag, index) => (
//               <Badge key={index} variant="default" className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground mt-4">These tags are AI-generated. Review and select the most appropriate ones.</p>
//         </div>
//       )}
//     </form>
//   );
// }
