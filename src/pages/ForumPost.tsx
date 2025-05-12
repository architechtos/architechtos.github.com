
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, User, MessageSquare, Image as ImageIcon } from "lucide-react";
import { getForumPostById, ForumComment } from "../data/forum";

const ForumPost = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { user } = useAuth();
  const [newComment, setNewComment] = useState("");
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundPost = getForumPostById(id);
      setPost(foundPost || null);
    }
    setIsLoading(false);
  }, [id]);

  const handleAddComment = () => {
    if (!user) {
      toast.error(language === 'en'
        ? "You need to be logged in to comment."
        : "Sie müssen eingeloggt sein, um zu kommentieren.");
      return;
    }

    if (!newComment.trim()) {
      toast.error(language === 'en'
        ? "Please enter a comment."
        : "Bitte geben Sie einen Kommentar ein.");
      return;
    }

    // In a real app, this would send data to the server
    toast.success(language === 'en'
      ? "Your comment has been added successfully!"
      : "Ihr Kommentar wurde erfolgreich hinzugefügt!");
    
    setNewComment("");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mb-12"></div>
          <div className="h-32 bg-gray-200 rounded mb-8"></div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-6">
          {language === 'en' 
            ? 'Forum post not found' 
            : 'Forumbeitrag nicht gefunden'}
        </h1>
        <Link to="/forum" className="text-tea-600 hover:underline flex items-center justify-center">
          <ArrowLeft size={16} className="mr-2" />
          {language === 'en' 
            ? 'Return to forum' 
            : 'Zurück zum Forum'}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link to="/forum" className="text-tea-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          {language === 'en' 
            ? 'Back to forum' 
            : 'Zurück zum Forum'}
        </Link>
      </div>
      
      {/* Post Header */}
      <div className="mb-8 pb-6 border-b">
        <h1 className="text-3xl font-bold mb-4">
          {post.title[language]}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{post.authorName}</span>
          </div>
          <span>•</span>
          <span>
            {new Date(post.date).toLocaleDateString(
              language === 'en' ? 'en-US' : 'de-DE',
              { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              }
            )}
          </span>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="mb-10">
        <p className="text-lg mb-6">
          {post.content[language]}
        </p>
        
        {post.imageSrc && (
          <div className="mb-6">
            <img 
              src={post.imageSrc} 
              alt="Post attachment" 
              className="rounded-md max-h-96"
            />
          </div>
        )}
      </div>
      
      {/* Comments Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <MessageSquare size={18} className="mr-2" />
          {post.comments.length} {language === 'en' 
            ? post.comments.length === 1 ? 'Comment' : 'Comments'
            : post.comments.length === 1 ? 'Kommentar' : 'Kommentare'}
        </h2>
        
        {/* Add Comment */}
        <div className="mb-8">
          <Textarea
            placeholder={language === 'en' 
              ? "Add a comment..." 
              : "Kommentar hinzufügen..."}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
            className="mb-4"
          />
          <div className="flex justify-end">
            <Button 
              onClick={handleAddComment}
              className="bg-tea-600 hover:bg-tea-700"
            >
              {language === 'en' ? 'Add Comment' : 'Kommentar hinzufügen'}
            </Button>
          </div>
        </div>
        
        {/* Comments List */}
        <div className="space-y-6">
          {post.comments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {language === 'en' 
                ? 'Be the first to comment!' 
                : 'Sei der Erste, der kommentiert!'}
            </div>
          ) : (
            post.comments.map((comment: ForumComment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

interface CommentCardProps {
  comment: ForumComment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="rounded-lg bg-muted/40 p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-tea-200 flex items-center justify-center">
            <User size={14} className="text-tea-700" />
          </div>
          <div>
            <div className="font-medium">{comment.authorName}</div>
            <div className="text-xs text-muted-foreground">
              {new Date(comment.date).toLocaleDateString(
                language === 'en' ? 'en-US' : 'de-DE',
                { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                }
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="pl-10">
        <p>{comment.content[language]}</p>
        
        {comment.imageSrc && (
          <div className="mt-3">
            <img 
              src={comment.imageSrc} 
              alt="Comment attachment" 
              className="rounded-md max-h-60"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPost;
