library(tidyverse)
library(rvest)
library(magrittr)

source("./info.R")
source("./utils.R")
source("./words.R")

# Data last fetched: November 1, 2019

url <- "https://abvd.shh.mpg.de/austronesian/language.php?id="
url_api <- "https://abvd.shh.mpg.de/utils/save/index.php?type=xml&section=austronesian&language="
# first <- 454. 1195 # Where errors have occured
first <- 1
last <- 1626

language_info <- tibble()
language_words <- tibble()

# There are two ways to fetch the data either by web scraping or using an API provided by the site owners
# Select only 1 of the 2 ways

# # Fetching by Webscraping
# 
# for (i in first:last) {
#   print(paste("Downloading language info ", i, "...", sep = ""))
#   webpage <- paste(url, i %>% as.character, sep = "") %>%
#     read_html()
#   
#   language_info <- bind_rows(
#     language_info,
#     language_info_fetch(webpage)
#   )
#   language_words <- bind_rows(
#     language_words,
#     language_words_fetch(webpage)
#   )
# }
# 
# 
# # # Debug
# # url <- "https://abvd.shh.mpg.de/austronesian/language.php?id="
# # i <- 454
# # webpage <- paste(url, i %>% as.character, sep = "") %>%
# #   read_html()
# # language_info_fetch(webpage)
# # language_words_fetch(webpage)
# 
# language_info_clean <- language_info %>%
#   mutate_at(.vars = vars(c("long", "lat")), as.numeric) %>%
#   mutate_at(.vars = vars(c("language", "language_code", "spoken")), as.factor) %>%
#   separate(statistics, into = c("total_data", "retentions", "empty_col", "loans"), sep="\\n+") %>%
#   mutate_at(vars(c("total_data", "retentions", "empty_col", "loans")), str_trim) %>%
#   select(-empty_col)
# 
# language_words_clean <- language_words %>%
#   mutate_at(.vars = vars(c("language", "word")), as.factor) %>%
#   separate(cognacy, c("cognacy1", "cognacy2"), sep="\\,", fill="warn") %>%
#   mutate(cognacy1 = str_trim(cognacy1) %>% as.numeric,
#          cognacy2 = str_trim(cognacy2) %>% as.numeric,
#          loan = str_trim(loan) %>% as.factor)



# Fetching by API

language_info_api <- tibble()
language_words_api <- tibble()

for (i in first:last) {
  language_info <- tibble()
  language_words <- tibble()
  
  print(paste("Downloading language info ", i, "...", sep = ""))
  xml_string <- paste(url_api, i %>% as.character, sep = "") %>%
    read_html()
  
  language_info <- xml_string %>%
    html_node("record")
  
  id_lang <- language_info %>% html_node("id") %>% html_text
  language <- language_info %>% html_node("language") %>% html_text
  author <- language_info %>% html_node("author") %>% html_text
  silcode <- language_info %>% html_node("silcode") %>% html_text
  glottocode <- language_info %>% html_node("glottocode") %>% html_text
  notes <- language_info %>% html_node("notes") %>% html_text
  problems <- language_info %>% html_node("problems") %>% html_text
  classification <- language_info %>% html_node("classification") %>% html_text
  typedby <- language_info %>% html_node("typedby") %>% html_text
  checkedby <- language_info %>% html_node("checkedby") %>% html_text

  latitude <- xml_string %>% html_node("latitude") %>% html_text
  longitude <- xml_string %>% html_node("longitude") %>% html_text
    
  language_words <- xml_string %>%
    html_nodes("record") %>%
    extract(-1)
  
  id <- language_words %>% html_node("id") %>% html_text
  word_id <- language_words %>% html_node("word_id") %>% html_text
  word <- language_words %>% html_node("word") %>% html_text
  item <- language_words %>% html_node("item") %>% html_text
  annotation <- language_words %>% html_node("annotation") %>% html_text
  loan <- language_words %>% html_node("loan") %>% html_text
  cognacy <- language_words %>% html_node("cognacy") %>% html_text
  pmpcognacy <- language_words %>% html_node("pmpcognacy") %>% html_text
  
  language_info <- tibble(id_lang, language, author, silcode, glottocode, notes, problems, classification, typedby, checkedby, latitude, longitude)
  language_words <- tibble(id_lang, language, id, word_id, word, item, annotation, loan, cognacy, pmpcognacy)
  
  language_info_api <- bind_rows(language_info_api, language_info)
  language_words_api <- bind_rows(language_words_api, language_words)
  
  print(paste("Language ", language, " accessed...", sep = ""))
}

language_words_api_clean <- language_words_api %>%
  filter(!is.na(id)) %>%
  left_join(language_info_api %>%
              select(id_lang, language, silcode),
            by = c("id_lang", "language")) %>%
  select(language, silcode, id_lang, id:pmpcognacy) %>%
  arrange(language)

write.csv(language_info_clean, "data/output_csv/language_info_clean.csv")
write.csv(language_words_clean, "data/output_csv/language_words_clean.csv")