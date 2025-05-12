
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { MessageSquare, Image as ImageIcon, Search, Plus, User } from "lucide-react";
import { forumPosts, ForumPost } from "../data/forum";

const Forum = () => {
  const { language, t } = useLanguage();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For this demo, search is handled client-side through filtering in the return statement
    toast.info(language === 'en' 
      ? `Searching for "${searchTerm}"` 
      : `Suche nach "${searchTerm}"`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      toast.info(language === 'en'
        ? `File selected: ${e.target.files[0].name}`
        : `Datei ausgewählt: ${e.target.files[0].name}`);
    }
  };

  const handleSubmitPost = () => {
    if (!user) {
      toast.error(language === 'en'
        ? "You need to be logged in to post."
        : "Sie müssen eingeloggt sein, um zu posten.");
      return;
    }

    if (!newPostTitle.trim()) {
      toast.error(language === 'en'
        ? "Please enter a title for your post."
        : "Bitte geben Sie einen Titel für Ihren Beitrag ein.");
      return;
    }

    if (!newPostContent.trim()) {
      toast.error(language === 'en'
        ? "Please enter content for your post."
        : "Bitte geben Sie Inhalt für Ihren Beitrag ein.");
      return;
    }

    // In a real app, this would send data to the server
    toast.success(language === 'en'
      ? "Your post has been created successfully!"
      : "Ihr Beitrag wurde erfolgreich erstellt!");
    
    setNewPostTitle("");
    setNewPostContent("");
    setSelectedFile(null);
    setDialogOpen(false);
  };

  // Filter posts based on search term
  const filteredPosts = forumPosts.filter(post => 
    post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.content[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {t("forum.title")}
          </h1>
          <p className="text-muted-foreground">
            {t("forum.subtitle")}
          </p>
        </div>
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-tea-600 hover:bg-tea-700 mt-4 md:mt-0">
              <Plus size={16} className="mr-2" />
              {t("forum.newPost")}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {t("forum.newPost")}
              </DialogTitle>
              <DialogDescription>
                {language === 'en' 
                  ? "Create a new forum post to ask a question or share your tea experience."
                  : "Erstellen Sie einen neuen Forumbeitrag, um eine Frage zu stellen oder Ihre Tee-Erfahrung zu teilen."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  {language === 'en' ? 'Title' : 'Titel'}
                </label>
                <Input
                  id="title"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  placeholder={language === 'en' ? 'Enter a title for your post' : 'Geben Sie einen Titel für Ihren Beitrag ein'}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">
                  {t("forum.question")}
                </label>
                <Textarea
                  id="content"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder={language === 'en' ? 'Share your question or experience' : 'Teilen Sie Ihre Frage oder Erfahrung mit'}
                  rows={5}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  {language === 'en' ? 'Image (optional)' : 'Bild (optional)'}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-tea-50 file:text-tea-700 hover:file:bg-tea-100"
                  />
                  {selectedFile && (
                    <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                      {selectedFile.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                {t("forum.cancel")}
              </Button>
              <Button className="bg-tea-600 hover:bg-tea-700" onClick={handleSubmitPost}>
                {t("forum.post")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            placeholder={t("forum.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
          <Button type="submit" variant="outline">
            <Search size={16} />
          </Button>
        </form>
      </div>
      
      {/* Forum Posts */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare size={48} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-medium mb-2">
              {language === 'en' ? 'No posts found' : 'Keine Beiträge gefunden'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === 'en' 
                ? 'Try a different search term or be the first to create a post.' 
                : 'Versuchen Sie einen anderen Suchbegriff oder erstellen Sie den ersten Beitrag.'}
            </p>
            <Button 
              onClick={() => setDialogOpen(true)}
              className="bg-tea-600 hover:bg-tea-700"
            >
              <Plus size={16} className="mr-2" />
              {t("forum.newPost")}
            </Button>
          </div>
        ) : (
          filteredPosts.map(post => (
            <ForumPostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

interface ForumPostCardProps {
  post: ForumPost;
}

const ForumPostCard = ({ post }: ForumPostCardProps) => {
  const { language } = useLanguage();
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <Link to={`/forum/post/${post.id}`} className="hover:text-tea-700">
          <CardTitle>{post.title[language]}</CardTitle>
        </Link>
        <CardDescription>
          <div className="flex items-center gap-2 text-sm">
            <User size={14} />
            <span>{post.authorName}</span>
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
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">
          {post.content[language]}
        </p>
        {post.imageSrc && (
          <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
            <ImageIcon size={14} />
            <span>{language === 'en' ? 'Image attached' : 'Bild angehängt'}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MessageSquare size={14} />
          <span>
            {post.comments.length} {language === 'en' 
              ? post.comments.length === 1 ? 'comment' : 'comments'
              : post.comments.length === 1 ? 'Kommentar' : 'Kommentare'}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Forum;
