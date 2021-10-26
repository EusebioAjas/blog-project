export interface MovieReviews {
    "results":Array<{
        "author":string,
        "author_details":Array<{
            "name":string,
            "username":string,
            "avatar_path":string,
            "rating":number
        }>,
        "content":string,
        "url":string
    }>
}
