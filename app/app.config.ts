export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary-sa-flag',
      secondary:'secondary-green',
      neutral: 'slate'
    },
    carousel: {
      slots:{

        dots:"bottom-7",
      },
      variants: {
        active: {
          true: {
            dot: 'data-[state=active]:bg-secondary-green'
          }
        }
      }
    },
    breadcrumb: {
       
      variants: {
        active: {
          true: {
            link: 'text-white/70 font-md'
          },
          false: {
            link: 'text-white font-md'
          }
        },
        disabled: {
          true: {
            link: 'cursor-not-allowed opacity-75'
          }
        },
        to: {
          true: ''
        }
      },
   
    }
  }
})

