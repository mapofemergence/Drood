#
# ***** BEGIN LICENSE BLOCK *****
# Version: MPL 1.1/GPL 2.0/LGPL 2.1
#
# The contents of this file are subject to the Mozilla Public License Version
# 1.1 (the "License"); you may not use this file except in compliance with
# the License. You may obtain a copy of the License at
# http://www.mozilla.org/MPL/
#
# Software distributed under the License is distributed on an "AS IS" basis,
# WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
# for the specific language governing rights and limitations under the
# License.
#
# The Original Code is mozilla.org code.
#
# The Initial Developer of the Original Code is
# Netscape Communications Corporation.
# Portions created by the Initial Developer are Copyright (C) 1998
# the Initial Developer. All Rights Reserved.
#
# Contributor(s):
#
# Alternatively, the contents of this file may be used under the terms of
# either of the GNU General Public License Version 2 or later (the "GPL"),
# or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
# in which case the provisions of the GPL or the LGPL are applicable instead
# of those above. If you wish to allow use of your version of this file only
# under the terms of either the GPL or the LGPL, and not to allow others to
# use your version of this file under the terms of the MPL, indicate your
# decision by deleting the provisions above and replace them with the notice
# and other provisions required by the GPL or the LGPL. If you do not delete
# the provisions above, a recipient may use your version of this file under
# the terms of any one of the MPL, the GPL or the LGPL.
#
# ***** END LICENSE BLOCK *****

DEPTH       = ../..
topsrcdir   = ../..
srcdir      = .
VPATH       = .

include $(DEPTH)/config/autoconf.mk

MODULE = appcomps

EXPORTS = nsXPFEComponentsCID.h

MOZ_HAVE_BROWSER=1
ifdef MOZ_THUNDERBIRD
MOZ_HAVE_BROWSER=
endif
ifdef MOZ_STANDALONE_COMPOSER
MOZ_HAVE_BROWSER=
endif
ifdef MOZ_SUNBIRD
MOZ_HAVE_BROWSER=
endif
ifdef GF_DROOD
MOZ_HAVE_BROWSER=
endif

ifneq (,$(MOZ_PHOENIX)$(MOZ_XULRUNNER))
# Firefox and XULRunner use this flag to suppress the distribution of chrome from
# the jar.mn file that lives parallel to this Makefile. The jar.mn is responsible
# for the packaging of a large number of chrome files these apps don't need. 
DEFINES += -DSUPPRESS_CHROME
endif

DIRS = \
        find \
        filepicker \
        $(NULL)

ifdef MOZ_RDF
DIRS += \
        intl \
        windowds \
        $(NULL)
endif

ifdef MOZ_HAVE_BROWSER
DIRS += \
        directory \
        resetPref \
        $(NULL)

ifndef MOZ_PHOENIX
ifndef MOZ_XULRUNNER
DIRS += \
        related \
        autocomplete \
        $(NULL)
ifneq ($(MOZ_BUILD_APP),camino)
DIRS += download-manager
endif
ifndef MOZ_XUL_APP
DIRS += startup
endif
ifndef MOZ_PLACES
DIRS += history
endif
endif
endif

ifdef MOZ_SUITE
ifeq ($(OS_ARCH),WINNT)
DIRS += winhooks
endif
endif

# build should be last
DIRS += build

else
# !MOZ_HAVE_BROWSER

DIRS += \
        autocomplete \
        history/public \
        $(NULL)

endif

ifndef MOZ_XUL_APP
ifdef MOZ_ENABLE_XREMOTE
TOOL_DIRS += xremote
endif
endif

include $(topsrcdir)/config/rules.mk
