module Api
    module V1
        class PostsController < ApplicationController
            protect_from_forgery with: :null_session

            # Sets a global variable of file names before the index or show methods are called
            before_action :set_posts, only: [:index, :show]

            def index
                posts = []
                # Reads .md files from set_posts and sends data as an argument to process_md method
                # Receives a hash, adds this to an array called posts

                @md_posts.each do |p|
                    posts << process_md(IO.read(p))
                end
                
                render json: { posts: posts }
            end

            def show
                posts = []
                @md_posts.each do |p|
                    posts << process_md(IO.read(p))
                end
                # Selects a post from the posts array with slug matching params[:slug]
                post = posts.select { |p| p[:slug] == params[:slug] }
                render json: { post: post }
            end

            private

            def set_posts
                # Sets a global variable containing an array of file names ending in .md
                @md_posts = Dir.glob("#{Rails.root}/app/assets/posts/*.md")
            end

            def process_md(md)
                # Builds a hash from data inside the .md
                post = Hash.new
                post[:title]    = md.match(/(?<=Title: ).*?(?=\n)/)[0]
                post[:author]   = md.match(/(?<=Author: ).*?(?=\n)/)[0]
                post[:slug]     = md.match(/(?<=Slug: ).*?(?=\n)/)[0].gsub(/\s+/, "")
                post[:img_url]  = "https://loremflickr.com/320/240/golden-retriever"
                content = md.match(/[^===]*$\Z/)[0]
                post[:content]  = md_to_html(content)
                post[:tags] = top_words(content)
                return post
            end

            def md_to_html(md)
                # Uses the redcarpet gem (library) to return HTML generate from mardown passed as an argument
                markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true)
                markdown.render(md)
            end

            def top_words(content)
                # NOTE: Could be improved with Regex to ignore non-word characters

                # Splits a string by ' ' and adds the resulting words to an array called words
                words = content.split(' ')
                frequency = Hash.new(0)

                # An array of words not to be counted copied from the documentation
                stop_words = [
                    '#', '##', 'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am',
                    'an', 'and', 'any', 'are', 'aren\'t', 'as', 'at', 'be', 'because', 'been',
                    'before', 'being', 'below', 'between', 'both', 'but', 'by', 'can\'t', 'cannot',
                    'could', 'couldn\'t', 'did', 'didn\'t', 'do', 'does', 'doesn\'t', 'doing', 'don\'t',
                    'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'hadn\'t',
                    'has', 'hasn\'t', 'have', 'haven\'t', 'having', 'he', 'he\'d', 'he\'ll', 'he\'s',
                    'her', 'here', 'here\'s', 'hers', 'herself', 'him', 'himself', 'his', 'how',
                    'how\'s', 'i', 'i\'d', 'i\'ll', 'i\'m', 'i\'ve', 'if', 'in', 'into', 'is', 'isn\'t',
                    'it', 'it\'s', 'its', 'itself', 'let\'s', 'me', 'more', 'most', 'mustn\'t', 'my',
                    'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other',
                    'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'shan\'t', 'she',
                    'she\'d', 'she\'ll', 'she\'s', 'should', 'shouldn\'t', 'so', 'some', 'such', 'than', 'that',
                    'that\'s', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'there\'s',
                    'these', 'they', 'they\'d', 'they\'ll', 'they\'re', 'they\'ve', 'this', 'those', 'through',
                    'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasn\'t', 'we', 'we\'d', 'we\'ll',
                    'we\'re', 'we\'ve', 'were', 'weren\'t', 'what', 'what\'s', 'when', 'when\'s', 'where',
                    'where\'s', 'which', 'while', 'who', 'who\'s', 'whom', 'why', 'why\'s', 'with', 'won\'t',
                    'would', 'wouldn\'t', 'you', 'you\'d', 'you\'ll', 'you\'re', 'you\'ve', 'your', 'yours',
                    'yourself', 'yourselves',
                  ]
                  
                # Iterates over the words array, and adds words to the frequency hash unless they are present in the stop_words array
                # The words becomes the key, and the number of occurences becomes the value
                words.each { |word| frequency[word.downcase] += 1 unless stop_words.include?(word) }

                # Sorts the hash frequency by value, and returns the top 5 keys as a string sperated by comma's
                frequency.sort_by { |key, value| value }.reverse.first(5).to_h.keys.join(", ")
            end

        end
    end
end